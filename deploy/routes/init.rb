def load_set(array, prefix = nil)
    array.each do |file|
        if prefix.nil?
            require Devinteractive.app_paths[:routes] + file
        else
            filepath = [prefix, file].join File::SEPARATOR
            require Devinteractive.app_paths[:routes] + filepath
        end
    end
end

# individual pages on the site
load_set %w{
    home
}, :pages

# individual pages on the site
load_set %w{
    cv
}, :services