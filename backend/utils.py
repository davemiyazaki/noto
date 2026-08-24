#dedicated to processing text which is NOT part of server rendering

from sudachipy import Dictionary, SplitMode 

tokenizer = Dictionary().create()

text = "空が好きだ"

morphemes = tokenizer.tokenize(text, SplitMode.A)

for m in morphemes:
    print(f"Surface: {m.surface()}")
    print(f"POS: {m.part_of_speech()}")
    print(f"Dictionary Form: {m.dictionary_form()}")



