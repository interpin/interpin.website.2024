# HubSpot CMS 

This repo is connected to our hubspot instance using the `hubspot.config.yml` file. All configuration is in there.

I also use the HubSpot plugin for VSC and "watch" the interpin-2024-theme directory. This will keep my local copy in sync with that hosted, but the CLI commands below give better feedback and are more reliable

**note** - *It's a good idea to run `npm fetch-all` when you start working on the project for the day. This is because most development happens in the HS Design Tools, which changes things directly in HS. If we don't pull these down before we start work we risk overriting yesterday's work*


## CLI Commands
**watch interpin-2024-theme directory for changes and upload**
```
npm run watch
```

**pulls files from the interpin-2024-theme/modules directory on HS and overrites local**
```
npm run fetch-modules
```

**fetch-sections from the interpin-2024-theme/sections directory on HS and overrites local**
```
npm run fetch-sections
```

**pulls files from the interpin-2024-theme on HS and overrites local**
```
npm run fetch-all
```