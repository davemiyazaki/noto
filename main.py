from sudachipy import dictionary

dict_obj = dictionary.Dictionary()

tokenizer_obj = dict_obj.create(fields={"surface","dictionary_form","pos"})

raw_text ="私はせっかちでごめん、ただ話したいなの"
listOfSomeSorts = tokenizer_obj.tokenize(raw_text)

listOfWords = {}

for m in listOfSomeSorts :

    wordInstance =[m.surface(), m.dictionary_form(), m.part_of_speech()]
    print(wordInstance)
