Using Webpack Version 4.x

Step 1. Configure the DllPlugin (webpack.vendor.config.js)

The DllPlugin   has the following compulsory options:
## name:
 This is the name of the dll function, it can be called anything, we will call this vendor_lib

## path: 
this is the  path of the outputed manifest json file, it must be an absolute path. We will store this in a folder called "build" in the root directory, the file will be called "vendor-manifest.json" 

To specify the path we shall use path.join like so:
path.join(__dirname, 'build', 'vendor-manifest.json')

In the webpack.vendor.config.js file, make sure output.library is the same as the DllPlugin "name" option

Include as many entry points as you want, in this example, i've included heavy weight libraries. Your output folder doesn't matter while using this plugin.

So here's how webpack.vendor.config.js looks now:

[snippet]


Step 2. Configure the DllReferencePlugin (webpack.config.js)

The DllReferencePlugin has two compulsory fields:
## context: 
This is an absolute path to the directory.... leave this as __dirname for this tutorial,

## manifest:
this is an absolute path to the dll's manifest json file. We'll set this to 
path.join(__dirname, 'build', 'vendor-manifest.json')

Here's how your webpack.config.js should look:
[snippet]

With that we're done setting up the dll plugin. 

# Building the Bundles

You’ll first need to run webpack with the webpack.vendor.config.js configuration, which would generate the vendor.manifest.json needed for webpack.config.js to work. This build could be done at the start of every development session, when its configuration changes or when the versions of the libraries in the vendor bundle change.

To build 

On subsequent code changes, you’ll only have to run webpack.config.js


To test the plugin i've instantiated a simple vue.js app in the src/index.js file, importing some heavy weight dependencies:
[snipper of index.js]

To import the two bundles created by the webpack config we add the following script tags to the index.html header:

[snippet index.html]


