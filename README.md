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

## Development

### Install Dependencies

```sh
yarn
```

### Build Artifact

```sh
yarn run all
```

### Change `action.yml`

The `action.yml` defines the inputs and output for your action.

Update the `action.yml` with your name, description, inputs and outputs for your action.

See the [documentation](https://help.github.com/en/articles/metadata-syntax-for-github-actions)


### Upgrade Dependencies

```sh
yarn run dependency-upgrade
```


