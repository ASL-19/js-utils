<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@asl-19/js-utils](./js-utils.md) &gt; [getRootRelativeUrl](./js-utils.getrootrelativeurl.md)

## getRootRelativeUrl variable

Given a fully-qualified URL, returns a root-relative URL.

**Signature:**

```typescript
getRootRelativeUrl: (fullyQualifiedUrl: string) => string
```

## Example


```ts
getRootRelativeUrl("https://asl19.org/")
// "/"
getRootRelativeUrl("https://asl19.org/foo")
// "/foo"
```

