#dedicated to processing text which is NOT part of server rendering

from sudachipy import Dictionary, SplitMode 

tokenizer = Dictionary().create()

text = "空が好きだ"


def tokenizeText(rawText:str):
    morphemes = tokenizer.tokenize(text, SplitMode.a)


    
    morpheme_list = list(morphemes)
    return len (morpheme_list)

def __debug(text:str):
    morphemes = tokenizer.tokenize(text, SplitMode.a)

    #morpheme_list = list(morphemes)

    print(morphemes.size())



