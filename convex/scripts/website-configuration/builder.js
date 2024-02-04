const fs = require("fs");

const appFile =
    "/Users/rahul/dev/Projects/convex-craft/convex/playground/src/App.js";
const outputJSONFile = "website-config.json";

// Read the content of the App.js file
const appContent = fs.readFileSync(appFile, "utf-8");

// Regular expression to match component definitions
const componentRegex = /<([A-Za-z]+)([^>]*)>((.|\n)*?)<\/\1>/g;

// Function to recursively process components
const processComponent = (match) => {
    const [, componentName, props, content] = match;
    const processedComponent = {
        name: componentName,
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

    // Process content recursively
    if (content) {
        const childMatches = content.matchAll(componentRegex);
        processedComponent.children = [...childMatches].map(processComponent);
    }

    return processedComponent;
};

// Find all component matches in the App.js file
const componentMatches = [...appContent.matchAll(componentRegex)];

// Process each top-level component
const processedComponents = componentMatches.map(processComponent);

// Generate the final JSON
const generatedJSON = {
    appStructure: {
        components: processedComponents,
    },
};

// Write the generated JSON to a file
fs.writeFileSync(outputJSONFile, JSON.stringify(generatedJSON, null, 2));
