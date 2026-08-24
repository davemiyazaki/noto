#dedicated to processing text which is NOT part of server rendering

from sudachipy import Dictionary, SplitMode 

tokenizer = Dictionary().create()

rawText = "空が好きだ"


def tokenizeText(rawText:str):
    morphemes = tokenizer.tokenize(text, SplitMode.A)

    #morpheme_list = list(morphemes)

    return morphemes.size()

def __debug(text:str):
    morphemes = tokenizer.tokenize(text, SplitMode.A)

    #morpheme_list = list(morphemes)

    print(morphemes.size())



__debug(rawText)