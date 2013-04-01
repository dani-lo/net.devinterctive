def load_set(array, prefix = nil)
    array.each do |file|
        if prefix.nil?
            require file
        else
            require [prefix, file].join File::SEPARATOR
        end
    end
end

# individual pages on the site
load_set %w{
    home
}, :pages