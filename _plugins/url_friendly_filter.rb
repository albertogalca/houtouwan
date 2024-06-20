require 'unicode'

module Jekyll
  module URLFriendlyFilter
    def to_url_friendly(input)
      input
        .encode('utf-8', invalid: :replace, undef: :replace, replace: '')
        .downcase
        .unicode_normalize(:nfd)   # Normalize to NFD (Decomposed)
        .gsub(/\p{M}/, '')         # Remove diacritics
        .gsub(/[^a-z0-9]+/, '_')
        .gsub(/^-|-$/, '')
    end
  end
end

Liquid::Template.register_filter(Jekyll::URLFriendlyFilter)
