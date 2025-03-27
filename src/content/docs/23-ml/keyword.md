---
title: Keyword
---

## 257 Rekognition

Find object in image and videos

Use case
- labeling
- content moderation
- text detection
- face detection and analysis
- face search, verification
- celebrity recognition
- pathing

### Content Moderation
Detect content that is inappropriate

Set minimum confidence threshold for items that will be flagged

Manual review in Amazon Augmented AI (A2I)





## 258 Amazon Transcribe
Convert speech to text

Automatic Speech Recognition (ASR)

Redaction: Automatically remove personally identifiable information (PII)

Automatic language identification





## 259 Amazon Polly
Turn text into lifelike speech
- Create app that talk

### Lexicon & SSML
SynthesizeSpeech: Pronunciation lexicons
- customize the pronunciation of words
- Stylized words: St3ph4ne -> Stephane
- Acronyms: AWS

Speech Synthesis Markup Language (SSML): more customization
- emphasize specific text
- use phonetic pronunciation
- breathing, whispering
- Newscaster speaking style





## 260 Amazon Translate
Localize content





## 261 Amazon Lex & Connect
Amazon Lex (same technology of Alexa)
- Automatic Spech Recognition (ASR)
- Natural language understanding
- chatbot, call center bot

Amazon Connect
- Receive call, create contact flow, cloud-based virtual contact center
- Integrate with other CRM or AWS

Phone call -> Connect -> Lex -> Lambda -> CRM (Customer Relationship Management)




## 262 Amazon Comprehend
Natural Language Processing

Serverless

Find insights and relationships in text
- language
- key phrases, places, people, ...
- positive or negative
- tokenization, parts of speech
- organize a collection of text by topic

Use case
- analyze customer interactions




## 263 Amazon Comprehend Medical
Detect and return useful information in unstructured clinical text

Detect Protected Health Information (PHI)

Integrate with
- S3
- Kinesis Data Firehose
- Amazon Transcribe




## 264 Amazon SageMaker
Build ML models




## 265 Amazon Forecast
Use ML to deliver accurate forecast

Use case
- product demand planning
- financial planning
- resource planning




## 266 Amazon Kendra
Document search service bv ML
- Extract answer from within a document

Natural language search

Incremental learning: learn from user feedback

Manually fine-tune search results




## 267 Amazon Personalize
Real-time personalized recommendation

Same technology by Amazon.com

Source
- S3
- Amazon Personalize API




## 268 Amazon Textract
Extract text from any documents
- form, tables
- PDFs, images




## 269 AWS Machine Learning Summary
Rekognition
- face detection, labeling, celebrity recognition

Transcribe
- speech to text

Polly
- text to audio

Translate

Lex
- chatbot, call center bot

Connect
- cloud contact center

Comprehend
- NLP

SageMaker
- make ML model

Forecast

Kendra
- ML search engine

Personalize
- real-time personalized recommendation