module.exports = {
  overrides: [
    {
      files: '*.js',
      options: {
        printWidth: 85,
        arrowParens: 'always',
        semi: false,
        tabWidth: 2,
        useTabs: false,
        singleQuote: true,
        quoteProps: 'as-needed',
        trailingComma: 'all',
        bracketSpacing: true,
        jsxBracketSameLine: false,
        rangeStart: 0,
        parser: 'babel',
        requirePragma: false,
        insertPragma: false,
        proseWrap: 'preserve',
      },
    },
  ],
}
