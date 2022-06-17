# Action Template using Typescript and yarn

Template for a Github Action using Typescript and Yarn

Based on [actions/typescript-action](https://github.com/actions/typescript-action)

Sample yaml snippet:

```yaml
      - uses: fwilhe2/action-template@main
        with:
          guest_name: Thomas
```

Run the action manually on the cli: `INPUT_GUEST_NAME=Michael node dist/index.js`
