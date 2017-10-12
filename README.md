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
(18,19): error TS2322: Type '{ client: ApolloClient<NormalizedCache>; children: Element; }' is not assignable to type 'IntrinsicAttributes & IntrinsicClassAttributes<ApolloProvider> & Readonly<{ children?: ReactNode;...'.
  Type '{ client: ApolloClient<NormalizedCache>; children: Element; }' is not assignable to type 'Readonly<ProviderProps<Cache>>'.
    Types of property 'client' are incompatible.
      Type 'ApolloClient<NormalizedCache>' is not assignable to type 'ApolloClient<Cache>'.
        Type 'NormalizedCache' is not assignable to type 'Cache'.
          Property 'add' is missing in type 'NormalizedCache'.
```