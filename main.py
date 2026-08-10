from sudachipy import dictionary, tokenizer

dict_obj = dictionary.Dictionary()

tokenizer_obj = dict_obj.create(fields={"surface","dictionary_form","pos"})

raw_text ="私はせっかちでごめん、ただ話したいなの"
listOfSomeSorts = tokenizer_obj.tokenize(raw_text)

for m in listOfSomeSorts :
    print(m)
