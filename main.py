from sudachipy import dictionary

dict_obj = dictionary.Dictionary()

tokenizer_obj = dict_obj.create(fields={"surface","dictionary_form","pos"})

raw_text ="私はせっかちでごめん、ただ話したいなの"
listOfSomeSorts = tokenizer_obj.tokenize(raw_text)

for m in listOfSomeSorts :
    print(f"Instance in the sentence {m.surface()}")
    print(f"Dictionary form: {m.dictionary_form()}")
    print(f"Part of Speech: {m.part_of_speech()[0]}")
