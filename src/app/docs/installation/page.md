---
title: Installation
nextjs:
  metadata:
    title: Simplecov Tailwindcss - Installation
    description: Steps for install and setting up package builder.
---

Find out how to install Package Builder to your org and get it setup for usage!

---

## Setup

### Available Versions

| Version | Package Id      | Password         | URL                                                |
| ------- | --------------- | ---------------- | -------------------------------------------------- |
| 2.0     | 04t1U000007vQ5C | QuXshu9Q8xbNeK4b | /packaging/installPackage.apexp?p0=04t1U000007vQ5C |
| 1.1     | 04t1U000006I6Zc | dVRu4KuQa2LKUuaN | /packaging/installPackage.apexp?p0=04t1U000006I6Zc |
| 1.0     | 04t1U000006I6N9 | 3BpmOLZnwPQO     | /packaging/installPackage.apexp?p0=04t1U000006I6N9 |

### Install Steps

1. Copy and past the url to the post of your https://orgname.my.salesforce.com post login.
2. Enter password when promted.
3. Select Profiles to apply to, we recommend Admins only.
4. Click install.

### Post Install Steps

#### Updating System Properties

##### API Version Used

Salesforce releases a new API version 3 times a year and that is not something we want to release a new version to support this. We want to give you the user to use the prefered API version your team requires.

1. Navigate to **Setup > Custom Code > Custom Metadata Types**.
2. Click **Manage Records** on System Property (PackBuild).
3. Find the row with the label "API Version Used".
4. Once found click **Edit** on the row.
5. For the Value field modify to the API value of SF you desire. Must be in a format similar to `56.0`.

##### CLI Command

With salesforce presently offering cli commands of sfdx and sf. SF is only in beta so until sfdx is fully deprecated this setting is applicable. This allows you the user to change which output you wanted generated for all users that use this tool.

1. Navigate to **Setup > Custom Code > Custom Metadata Types**.
2. Click **Manage Records** on System Property (PackBuild).
3. Find the row with the label "CLI Command".
4. Once found click **Edit** on the row.
5. For the Value field modify to the CLI command your team will be using. The only acceptable values are `sfdx` or `sf`.
