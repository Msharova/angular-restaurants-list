# LogexTest

This project was initially generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Comments on developing process

Please note that this is my first-time experience with Angular and TypeScript whatsoever.

### Implemented features

This represents MVP - no bonus tasks were implemented. From initial task:

* The table is auto-generated, it can be sorted by any of it's headers;
* Filtering by substring is implemented, it works for any data in the table. Filtering by city selection is not implemented, only by substring.
* Each venue can be expanded by click, which will show main picture, and requested details. If any info is missing, placeholder is provided.

### Known issues

* Expanding rows are now working well after fitering, for yet unknown reason first click doesn't show the expanded row. After closing it again, works as intended. Tried to mitigate it with forcebly closing all expanded rows on sorting event, but issue still remains.

### Used materials

Since it's my first time work with Angular, I leaned heavily into tutorials and examples. Here's most used:
* [Tour of Heroes application and tutorial](https://angular.io/tutorial)
* [Angular Material Sort Header](https://material.angular.io/components/sort/overview)
* Extensive Googling and StackOverflow usage.


# [Website](https://logex-test.netlify.app/)
