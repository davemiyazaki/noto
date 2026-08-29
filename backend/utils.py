#dedicated to processing text which is NOT part of server rendering

from sudachipy import Dictionary, SplitMode

tokenizer = Dictionary().create()


def analyzeText(userInput:str):
    tokenizedText,splittedText = createReadableTokenizedText(rawText=userInput)
    frequencyAnalysis = calculateWordFrequency(tokenizedText)

    return {"text":splittedText, "frequency":frequencyAnalysis}  #returning dict and list


def createReadableTokenizedText(rawText:str):
    morphemes = tokenizer.tokenize(rawText, SplitMode.A)
    ALLOWED_POS = ["名詞", "形状詞", "形容詞","動詞", "副詞"]

    morpheme_list = []
    originalTextSplit = []
    for i in morphemes:
        if i.part_of_speech()[0] in ALLOWED_POS:
            morpheme_list.append(i.dictionary_form())
        originalTextSplit.append(i.raw_surface())
    return morpheme_list, originalTextSplit;



def calculateWordFrequency(wordList:list[str]):
    #create pure list of counting using uniqness rules of dictionaries
    initialValue: int = 0
    wordDictionary = dict.fromkeys(wordList, initialValue)
    wordDictionaryItems = list(wordDictionary.keys())


    for i in range(len(wordDictionaryItems)):
        frequencyCount = wordList.count(wordDictionaryItems[i])
        wordDictionary[wordDictionaryItems[i]] = frequencyCount

    return wordDictionary


def __debug():

    ALLOWED_POS = ["名詞", "形状詞", "形容詞","動詞", "副詞"]
    morphemes = tokenizer.tokenize("旅行の計画を立てるときは、行きたい場所を全部詰め込むよりも、予定に少し余裕を持たせたほうが、現地で予想外の出来事が起きても楽しめる。", SplitMode.B)
    matchedList  = []
    ignoredList = []

    for i in morphemes:
        word = i.surface()
        print(f"Surface: {word}")
        if i.part_of_speech()[0] in ALLOWED_POS:
            matchedList.append(word)
        else:
            ignoredList.append(word)
        print(f"POS: {i.part_of_speech()[0]} {i.part_of_speech()[1]}\n\n")

    print("MATCHED LIST ______________")
    for i in matchedList:
        print(i)

    print("unMATCHED LIST ______________")
    for i in ignoredList:
        print(i)

#__debug()
