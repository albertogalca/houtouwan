# Licensed under CC0 Public Domain License,
# Read More: https://creativecommons.org/publicdomain/zero/1.0/

module Jekyll
  class ImageTag < Liquid::Tag
    def initialize(tag_name, text, tokens)
      super
      @opts = parse_options(text)
    end

    def render(context)
      "<figure class=\"image\"><img src=\"#{@opts[:src]}\" alt=\"#{@opts[:alt]}\"><figcaption class=\"text-center\">#{@opts[:alt]}</figcaption></figure>"
    end

    # Source: https://github.com/jekyll/jekyll/blob/dbbfc5d48c81cf424f29c7b0eebf10886bc99904/lib/jekyll/tags/highlight.rb#L56
    OPTIONS_REGEX = %r{(?:\w="[^"]*"|\w)+}
    def parse_options(input)
      options = {}
      return options if input.empty?

      # Split 1 possible form -- key="value"
      input.scan(OPTIONS_REGEX) do |opt|
        key, value = opt.split("=")
        # Remove Quotes
        if value&.include?('"')
          value.delete!('"')
        end
        if value
          options[key.to_sym] = value
        end
      end

      options
    end
  end
end

Liquid::Template.register_tag("image", Jekyll::ImageTag)
