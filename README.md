# apollo-client-preset-ts-example
Minimal example for apollo-client-preset with TypeScript and GraphCool

# Develop
```
yarn install
yarn start
```

# TOFIX
> https://github.com/apollographql/apollo-client/issues/2212
```
./src/index.tsx
(18,19): error TS2322: Type '{ client: ApolloClient<NormalizedCacheObject>; children: Element; }' is not assignable to type 'IntrinsicAttributes & IntrinsicClassAttributes<ApolloProvider> & Readonly<{ children?: ReactNode;...'.
  Type '{ client: ApolloClient<NormalizedCacheObject>; children: Element; }' is not assignable to type 'Readonly<ProviderProps<Cache>>'.
    Types of property 'client' are incompatible.
      Type 'ApolloClient<NormalizedCacheObject>' is not assignable to type 'ApolloClient<Cache>'.
        Type 'NormalizedCacheObject' is not assignable to type 'Cache'.
          Property 'add' is missing in type 'NormalizedCacheObject'.
```
And
> https://github.com/apollographql/apollo-client/issues/2503
```
/Users/katopz/poc/apollo-client-preset-ts-example/node_modules/apollo-cache-inmemory/lib/inMemoryCache.d.ts
(5,22): error TS2415: Class 'InMemoryCache' incorrectly extends base class 'ApolloCache<NormalizedCacheObject>'.
  Types of property 'read' are incompatible.
    Type '<T>(query: ReadOptions) => T | null' is not assignable to type '<T>(query: ReadOptions) => T'.
      Type 'T | null' is not assignable to type 'T'.
        Type 'null' is not assignable to type 'T'.
```