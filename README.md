# dex

A front end project used to show data from the pokeAPI.

This app uses [Tailwindcss](https://tailwindcss.com/docs) for styling.

# Working with Tailwindcss

## build:tailwind

You'll need to run it for once before publishing the build and all it does is take `src/tailwind.css` as an input file and outputs the css classes as required into `tailwind.generated.css` and `-o` is for output.

## watch:tailwind

The only difference between this and above is the `-w` flag, that is for watch and now whenever you update the `tailwind.css` file you'll see the changes take effect instantly.

## start && dev

Now finally sticking them together, while running `yarn start` we can get our react to work, but to watch for changes in `tailwind.css` file we need to add the `run-p watch:tailwind` command.

`run-p` is a from our `npm-run-all` package and all it does is run our given scripts in parallel. So here we can run both `yarn run watch:tailwind` and `yarn run start` at the same time, instead of switching terminals.

## prebuild && build

Ultimately we need the build commands for deploying our app, so lets add them. One thing you should know is `pre` keyword is special here, it means anytime our `build` command will be executed, before it the `prebuild` must execute. Same with `prestart` and `start`.

There's also `post` keyword to do the vice versa, like `postbuild` to run a script after running `build` script.
