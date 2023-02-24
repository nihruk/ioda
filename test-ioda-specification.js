import OpenAPIParser from "@readme/openapi-parser";


try {
    await OpenAPIParser.validate('./openapi/index.yaml', {
        validate: {
            colorizeErrors: true,
        }
    });
} catch (err) {
    console.error(err.message);
}
