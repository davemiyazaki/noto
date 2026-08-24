#dedicated to processing text which is NOT part of server rendering

from sudachipy import Dictionary, SplitMode 

tokenizer = Dictionary().create()

rawText = "空が好きだ"


def analyzeText(userInput:str):
    worsList = createReadableTokenizedText(rawText=userInput)
    


def createReadableTokenizedText(rawText:str):
    morphemes = tokenizer.tokenize(rawText, SplitMode.A)

    morpheme_list = list(morphemes)

    return morpheme_list;

def __debug(text:str):
    morphemes = tokenizer.tokenize(text, SplitMode.A)

    #morpheme_list = list(morphemes)

    print(morphemes.size())


