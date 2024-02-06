const fs = require("fs");

const inputJSONFile = "website-config.json";
const outputJSXFile = "App.jsx";

// Read the content of the JSON file
const jsonData = JSON.parse(fs.readFileSync(inputJSONFile, "utf-8"));

// Extract imports from JSON
const imports = jsonData.imports || [];

// Function to generate JSX for a component
const generateJSX = (component) => {
    let jsx = `<${component.name}`;

    // Add props
    if (component.props) {
        jsx +=
            " " +
            Object.entries(component.props)
                .map(([key, value]) => `${key}="${value}"`)
                .join(" ");
    }

    jsx += ">";

    // Add children or content
    if (component.children) {
        jsx += component.children.map(generateJSX).join("");
    } else if (component.value) {
        jsx += component.value;
    }

    jsx += `</${component.name}>`;

    return jsx;
};

// Generate JSX for each top-level component
const jsxContent = jsonData.appStructure.components.map(generateJSX).join("");

// Generate the final JSX content with imports and React component structure
const finalJSXContent = `import "./App.css";\n${imports
    .map((imp) => `import ${imp.imported} from "${imp.path}";`)
    .join(
        "\n"
    )}\n\nconst App = () => {\nreturn (\n<div className="App">\n${jsxContent}\n</div>\n);\n};\n\nexport default App;`;

// Write the generated JSX to a file
fs.writeFileSync(outputJSXFile, finalJSXContent);
