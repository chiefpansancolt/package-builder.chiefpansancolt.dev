---
title: Getting Started
nextjs:
  metadata:
    title: Package Builder - Getting Started
    description: Getting started with using Package Builder in a Salesforce environment.
---

Learn how to get Package Builder set up in your Environment.

{% quick-links %}

{% quick-link title="Installation" icon="installation" href="/docs/installation" description="Step-by-step guides to setting up your system and installing the library." /%}

{% quick-link title="Usage" icon="presets" href="/" description="Understand how to use it in your project." /%}

{% quick-link title="Salesforce install a package" icon="plugins" href="https://help.salesforce.com/s/articleView?id=sf.distribution_installing_packages.htm&type=5" description="See how to install a package in Salesforce." /%}

{% quick-link title="Roadmap" icon="theming" href="https://github.com/users/chiefpansancolt/projects/7" description="See what is planned or being worked" /%}

{% /quick-links %}

---

## Quick start

Package Builder is a tool to enable admins and developers for finding metadata apis to retrieve and pull to local or version control when api's are auto generated or ingeneral just need to look at eveything.

### Installing Package

To install in your org use the url and password below for installing.

#### Version 2.0

- **URL**: /packaging/installPackage.apexp?p0=04t1U000007vQ5C
- **PWD**: QuXshu9Q8xbNeK4b

> Note: this is a managed package to make it easier to exclude in some senerios for org metrics, but code is fully viewable via the repo.

### Features

- Ability to select a Metadata Type
- Ability to select up to 3 folders for applicable Metadata Types
- Ability to select what Package Type (All, Managed, Unmanaged)
- Give full list of applicable metadata based on above features
- Get Package.xml output for selected metadata for applicable Metadata Type.
- Get sfdx or sf command output to retrieve metadata locally.
- Copy button for SFDX command.
- Copy All and Copy Type buttons for Package.xml.
  - Copy All is to get the full package.xml output
  - Copy Type gets only the type grouping of the package.xml format
- Ability to set API Version as new release come out.

---

## Resources

### License

Package Builder is available as open source under the terms of the [MIT License](https://github.com/chiefpansancolt/package-builder/blob/main/LICENSE).

### Change Log

Latest release details

#### Version [2.0](https://github.com/chiefpansancolt/package-builder/releases/tag/2.0)

##### Features

- Add Support for sf cli command ([#13](https://github.com/chiefpansancolt/package-builder/issues/13))
- Add Copy All Button to Package.xml to copy all code ([#7](https://github.com/chiefpansancolt/package-builder/issues/7))
- Add Copy Types Button to Package.xml to get just types snippet ([#7](https://github.com/chiefpansancolt/package-builder/issues/7))
- Add Copy Button to CLI Reference Command to get snippet ([#6](https://github.com/chiefpansancolt/package-builder/issues/6))
- Add ability to toggle API Version for future proofing.
- Add ability to toggle CLI Command to use from sfdx or sf.

##### Changes

- Clean up UX to be more fluid and updated to latest formats ([#5](https://github.com/chiefpansancolt/package-builder/issues/5))
- Clean up repo with more documentation and automation ([#4](https://github.com/chiefpansancolt/package-builder/issues/4))

##### Fixes

- Fixed Metadata Types not being supported. Now generates available Types based on API Version ([#11](https://github.com/chiefpansancolt/package-builder/issues/11))
- Fixed SFDX command reference generation when multiple files are selected. ([#9](https://github.com/chiefpansancolt/package-builder/issues/9))

---

## Getting help

There are many ways to get assistance via Issues, Discussions, Pull Requests and Discord Community.

### Contributing

Bug Reports, Feature Requests, and Pull Requests are welcome on GitHub at [https://github.com/chiefpansancolt/package-builder](https://github.com/chiefpansancolt/package-builder). This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](https://github.com/chiefpansancolt/package-builder/blob/main/.github/CODE_OF_CONDUCT.md) code of conduct.

To see more about Contributing check out this [document](https://github.com/chiefpansancolt/package-builder/blob/main/.github/CONTRIBUTING.md).

- Fork Repo and create new branch
- Once all is changed and committed create a pull request.

**Ensure all merge conflicts are fixed and CI is passing.**

### Join the community

Join the community buy posting in our [discussions](https://github.com/chiefpansancolt/package-builder/discussions) on GitHub or joining the community on [discord](https://discord.gg/SDryP2579d)
