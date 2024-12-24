// Force foreground-scripts during installation
process.env.npm_config_foreground_scripts = "true";

process.env.npm_config_loglevel = "info";

console.log("\x1b[36m%s\x1b[0m", "----------------------------------------");
console.log("\x1b[32m%s\x1b[0m", "Hello, world!");
console.log("\x1b[36m%s\x1b[0m", "----------------------------------------");
