# Python gRPC SDK

## Basic Installation {#installation}

The Python gRPC SDK is published to PyPI and can be installed just like any other Python package via `pip`. All you need to do to install it is run:

```bash
pip install stability-sdk
```

## Developer Installation

For access to bleeding-edge features, you can build the package from source code. The recommended installation for most purposes is the basic install described above.

Before getting started with the API, we need to set up a local development environment.

Following this article will walk you through how to set up your local development environment, download our repository (which includes everything you need to get started), and verify your environment setup.

### 0. (Optional) Create and activate a Python virtual environment... {#create-python-virtual-env}

Using the `venv` module which ships with your Python install, create a virtual environment named "venv" thusly:

```bash
python3 -m venv venv
```

We're invoking `python3` here to access the 'system' Python executable.

To activate the environment:

```bash
source venv/bin/activate
```

When the environment has been successfully activated, you should see the environment name as a prefix in your terminal prompt, e.g.

```bash
# prompt before activating
/path/to/current/directory >

# prompt after activating
(venv) /path/to/current/directory >
```

With the environment activated, invoking `python` will access the Python executable for the activated environment, rather than the system Python. Installing Python packages -- either from source as described below or via pip -- will only impact the environment Python executable.

To deactivate the virtual environment, simply run the command `deactivate`.

### 1. Clone the `stability-sdk` repository from GitHub... {#clone-stability-sdk-repo}

The stability-sdk repository currently (as of 0.3.0) has dependencies on git submodules. To fetch these submodules while cloning, use the `--recurse-submodules` argument:

```bash
git clone --recurse-submodules https://github.com/Stability-AI/stability-sdk
```

If you cloned without this argument, you can pull the submodule dependencies by running the following commands after navigating into the repository:

```bash
git submodule init
git submodule update
```

if there is a specific branch you want to clone, you can use the `--branch` argument:

```bash
git clone --branch branchName --recurse-submodules https://github.com/Stability-AI/stability-sdk
```

Alternatively, you can use the `switch` command after cloning to pull and checkout into any branch hosted at the `origin` remote (following these instructions, your origin remote will be set to https://github.com/stability-ai/stability-sdk.git). After navigating into the repository:

```bash
git fetch
git switch branchName
```

### 2. Navigate into the `stability-sdk` repository directory... {#cd-into-stability-sdk-repo}

```bash
cd stability-sdk
```

### 3. Install the Python SDK... {#install-stability-sdk}

To use pip to install from the local codebase rather than pulling a package from PyPI, we simply pass the current location (i.e. `.`) as an argument:

```bash
pip install .
```

If you plan to make changes to the local code, you may find it useful to install in "editable" mode, which will respect your code changes as soon as you make them. Otherwise, you will need to reinstall after each change. To install in editable mode, we just add the `-e` argument:

```bash
pip install -e .
```

### 4. Optionally, set the `STABILITY_HOST` and `STABILITY_KEY` environment variables... {#set-stability-host-and-key-env-vars}

We'll set these inside the example scripts as well, but this sets them in the environment so that you don't need to pass these values as explicit arguments.

Note that `export` is Linux / MacOS syntax. If you are using Windows, you will need to use the `set` command instead.

```bash
# Sign up for an account at the following link to get an API Key.
# https://dreamstudio.ai/

# Click on the following link once you have created an account to be taken to your API Key.
# https://dreamstudio.ai/account

export STABILITY_HOST=grpc.stability.ai:443
export STABILITY_KEY=yourkeyhere
```

### 5. Invoke the API to test your setup... {#invoke-the-api}

```bash
python -m stability_sdk generate "A stunning house."
```

Following successful installation you should see connection and generation logs output to your terminal and the image generated by your request saved to your current directory.