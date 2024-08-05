# Code Generator Arguments

## Notes
* Generator comments are `// gen: ...`
* They has name of the program and its arguments
* Some arguments are __magic__

## Magic Arguments
* `$`         - Path to current file that contains this comment
* `$/`        - Root path of the project. For example `$/out/index.html` leads to `index.html` from output
* `$out`      - Outputs path with __current file name__ and `.gen.ts` suffix. Creates `gen` folder for that.
* `$out:name` - Outputs path with __custom name__. Creates `gen` folder for that