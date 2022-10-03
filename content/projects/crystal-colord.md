
---
title: crystal-colord
type: page
---

[See on GitHub](https://github.com/jakeroggenbuck/crystal-colord/)

# crystal-colord

 A library for colored text in crystal 

## Installation

1. Add the dependency to your `shard.yml`:

   ```yaml
   dependencies:
     crystal-colord:
       github: jakeroggenbuck/crystal-colord
   ```

2. Run `shards install`

## Usage

```crystal
require "crystal-colord"
```

```crystal
message = CrystalColord::Colord.new "Hey"
message.cyan(background=true)
message.black
puts message.bold
```

## Contributing

1. Fork it (<https://github.com/jakeroggenbuck/crystal-colord/fork>)
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request

## Contributors

- [jakeroggenbuck](https://github.com/jakeroggenbuck) - creator and maintainer
