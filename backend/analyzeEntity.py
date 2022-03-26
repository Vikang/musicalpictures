import os
from google.cloud import language_v1

os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = 'backend/client_service_key.json'

def enities(entry):
    filteredEntities = entry
    return filteredEntities

def sample_analyze_syntax(text_content):
    """
    Analyzing Syntax in a String

    Args:
      text_content The text content to analyze
    """

    client = language_v1.LanguageServiceClient()

    # text_content = 'This is a short sentence.'

    # Available types: PLAIN_TEXT, HTML
    type_ = language_v1.Document.Type.PLAIN_TEXT

    # Optional. If not specified, the language is automatically detected.
    # For list of supported languages:
    # https://cloud.google.com/natural-language/docs/languages
    language = "en"
    document = {"content": text_content, "type_": type_, "language": language}

    # Available values: NONE, UTF8, UTF16, UTF32
    encoding_type = language_v1.EncodingType.UTF8

    response = client.analyze_syntax(request = {'document': document, 'encoding_type': encoding_type})

    final = ""

    # Loop through tokens returned from the API
    for token in response.tokens:
        # Get the text content of this token. Usually a word or punctuation.
        text = token.text
        print(u"Token text: {}".format(text.content))
        print(
            u"Location of this token in overall document: {}".format(text.begin_offset)
        )
        # Get the part of speech information for this token.
        # Part of speech is defined in:
        # http://www.lrec-conf.org/proceedings/lrec2012/pdf/274_Paper.pdf
        part_of_speech = token.part_of_speech
        # Get the tag, e.g. NOUN, ADJ for Adjective, et al.
        print(
            u"Part of Speech tag: {}".format(
                language_v1.PartOfSpeech.Tag(part_of_speech.tag).name
            )
        )

        if (language_v1.PartOfSpeech.Tag(part_of_speech.tag).name == "NOUN" or language_v1.PartOfSpeech.Tag(part_of_speech.tag).name == "ADP" ):
            final += text.content + "\n"
    print(enities(final))


text_content = "I don't want a friend I want my life in two Waiting to get there Waiting for you  When I'm around, slow dancing in the dark Don't follow me, you'll end up in my arms You done made up your mind I don't need no more signs Can you? Can you?  Give me reasons we should be complete You should be with him, I can't compete You looked at me like I was someone else, oh, well"
print(sample_analyze_syntax(text_content))