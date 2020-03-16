# whitespace encoder

Hides secret messages using whitespace only (invisible) characters.

In 2001, I was given a shareware CD with a program called [SNOW](http://www.darkside.com.au/snow/) on a shareware CD. SNOW was my first encounter with steganography and I've always wanted to implement my own take on SNOW's concept.

## Usage

Only plaintext (ASCII only) files are supported at the moment, such as those made in `notepad.exe`

#### Encode

```console
$ node whitespace.js [INPUT FILE] [OUTPUT FILE]
```

#### Decode

```console
$ node whitespace.js [ENCODED FILE]
```

## See Also

  * http://www.darkside.com.au/snow/
  * https://hackaday.com/2018/04/15/hide-secret-messages-in-plain-sight-with-zero-width-characters/
  * http://mewbies.com/steganography/snow/how_to_conceal_a_message_in_a_text_file.htm

## Author
Copyright © 2020 Timothy Keith

Licensed under the [MIT license](LICENSE).

This is free software: you are free to change and redistribute it. There is NO WARRANTY, to the extent permitted by law.