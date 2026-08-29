#dedicated to processing text which is NOT part of server rendering

from sudachipy import Dictionary, SplitMode

tokenizer = Dictionary().create()


def analyzeText(userInput:str):
    tokenizedText,splittedText = createReadableTokenizedText(rawText=userInput)
    frequencyAnalysis = calculateWordFrequency(tokenizedText)

    return {"text":splittedText, "frequency":frequencyAnalysis}  #returning dict and list


def createReadableTokenizedText(rawText:str):
    morphemes = tokenizer.tokenize(rawText, SplitMode.A)

    morpheme_list = []
    originalTextSplit = []
    for i in range(morphemes.size()):
        morpheme_list.append(morphemes[i].dictionary_form())
        originalTextSplit.append(morphemes[i].raw_surface())

    # DEBUG
    #print(f"LIST OF MORPHEMES IS {morpheme_list} ")

    return morpheme_list, originalTextSplit;



def calculateWordFrequency(wordList:list[str]):
    #create pure list of counting using uniqness rules of dictionaries
    initialValue: int = 0
    wordDictionary = dict.fromkeys(wordList, initialValue)
    wordDictionaryItems = list(wordDictionary.keys())

    # DEBUG
    #print(f"LIST OF WORD DICTIONARY KEYS IS {wordDictionaryItems} ")

    for i in range(len(wordDictionaryItems)):
        frequencyCount = wordList.count(wordDictionaryItems[i])
        wordDictionary[wordDictionaryItems[i]] = frequencyCount

    return wordDictionary


def __debug():
    morphemes = tokenizer.tokenize("空が好きだ", SplitMode.A)

    for i in morphemes:
        print(f"Surface: {i.surface()}")
        print(f"Dictionary form: {i.dictionary_form()}")
        print(f"POS: {i.part_of_speech()}\n\n\n")


__debug()
