average(arr::Array{Int64}) = sum(arr) / length(arr)
parsearr(arr::Array{String}) = (parse).(Int64, arr) # for 32-bit machines use Int32

# It's a silly way of getting the result of a function to STDOUT but it works and i dare not change it
print(average(parsearr(ARGS))) 

