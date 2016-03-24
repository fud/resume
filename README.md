Brenton Bills Resume
======

:octocat: Every developer needs his or her own
[resume.json](https://jsonresume.org/) file to programatically produce
their resume. I conform to the [json resume schema](https://jsonresume.org/schema/)
but I produce the end results using [hackmyresume](https://www.npmjs.com/package/hackmyresume).


## Install

All the requirements needed.

```
npm install
```

## Building resume in multiple formats.

```
grunt
```

## Shortcomings

Currently the json resume schema confuses references with testimonials. Generally in Australia
we add references as people that can be contacted who will talk about your competence.

Outlined in this issue, jsonresume/resume-schema#2

