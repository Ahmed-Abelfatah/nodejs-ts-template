import pluginJs from '@eslint/js'
import parserTypeScript from '@typescript-eslint/parser'
import pluginTypeScript from '@typescript-eslint/eslint-plugin'

export default [
    {
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            parser: parserTypeScript,
            parserOptions: {
                project: true,
            },
        },
        plugins: {
            '@typescript-eslint': pluginTypeScript,
        },
        rules: {
            ...pluginTypeScript.configs.recommended.rules,
        },
    },
    {
        files: ['**/*.{js,mjs,cjs}'],
        ...pluginJs.configs.recommended,
    },
]
