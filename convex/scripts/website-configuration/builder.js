const fs = require("fs");

const appFile =
    "/Users/rahul/dev/Projects/convex-craft/convex/playground/src/App.js";
const outputJSONFile = "website-config.json";

// Read the content of the App.js file
const appContent = fs.readFileSync(appFile, "utf-8");

// Regular expression to match import statements
const importRegex = /import\s+(\w+|\{[^}]*\})\s+from\s+["']([^"']+)["']/g;

// Find all import matches in the App.js file
const importMatches = [...appContent.matchAll(importRegex)];

// Extract imports from matches
const imports = importMatches.map((match) => {
    const [, imported, path] = match;
    return { imported, path };
});

// Regular expression to match component definitions
const componentRegex = /<([A-Za-z]+)([^>]*)>((.|\n)*?)<\/\1>/g;

// Function to recursively process components
const processComponent = (match) => {
    const [, componentName, props, content] = match;
    const processedComponent = {
        name: componentName,
        children: [],
    };

    // Process props
    if (props) {
        const propsRegex = /\s*([A-Za-z]+)="([^"]*)"/g;
        processedComponent.props = {};
        let propMatch;
        while ((propMatch = propsRegex.exec(props)) !== null) {
            const [, propName, propValue] = propMatch;
            processedComponent.props[propName] = propValue;
        }
    }

    // Process content
    if (content) {
        const childMatches = content.matchAll(componentRegex);
        const childComponents = [...childMatches].map(processComponent);

        // If there are nested components, keep them as children
        if (childComponents.length > 0) {
            processedComponent.children = childComponents;
        } else {
            // If content is just text, add it as a string in children
            processedComponent.children = [
                {
                    name: "content",
                    value: content.trim(),
                },
            ];
        }
    }

    return processedComponent;
};

// Find all component matches in the App.js file
const componentMatches = [...appContent.matchAll(componentRegex)];

// Process each top-level component
const processedComponents = componentMatches.map(processComponent);

// Include <div className="App"> in the structure
const finalComponents = [
    {
        name: "div",
        props: { className: "App" },
        children: processedComponents,
    },
];

// Generate the final JSON
const generatedJSON = {
    imports,
    appStructure: {
        components: finalComponents,
    },
};

// Write the generated JSON to a file
fs.writeFileSync(outputJSONFile, JSON.stringify(generatedJSON, null, 2));
