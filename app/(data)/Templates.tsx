import { icons } from "lucide-react";

export default  [
    {
        name:'Blog Title',
        desc:'An AI tool that generate blog title depends on yout blog information',
        category:'Blog',
        icon:'https://cdn-icons-png.flaticon.com/128/4186/4186534.png',
        aiPrompt:'Give me 5 blog topic idea in bullet wise only based on give niche & outline and give me result in Rich text editor format',
        slug:'generate-blog-title',
        form:[
            {
                label:'Enter your blog niche',
                field:'input',
                name:'niche',
                required:true
            },
            {
                label:'Enter blog outline',
                field:'textarea',
                name:'outline',
                
            }
        ]
    },
    {
        name: 'Blog Content',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        category: 'blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/4905/4905454.png',
        slug: 'blog-content-generation',
        aiPrompt: 'Generate Blog Content based on topic and outline in rich text editor format',
        form: [
            {
                label: 'Enter your blog topic',
                field: 'input',
                name: 'topic',
                required:true
            },
            {
                label: 'Enter blog Outline here',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Blog Topic Ideas',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/11497/11497847.png',
        slug: 'blog-topic-idea',
        aiPrompt: 'Generate top 5 Blog Topic Ideas in bullet point only, (no Description) based on niche in rich text editor format',
        form: [
            {
                label: 'Enter your Niche',
                field: 'input',
                name: 'niche',
                required:true
            },
        ]
    },
    {
        name: 'Youtube SEO Title',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        category: 'Youtube Tools',
        icon: 'https://cdn-icons-png.flaticon.com/128/402/402075.png',
        slug: 'youtube-seo-title',
        aiPrompt: 'Give me Best SEO optimized high ranked 5 title ideas bullet wise only bases on keywords and outline and give me result in HTML tags format',
        form: [
            {
                label: 'Enter your youtube video topic keyowords',
                field: 'input',
                name: 'keywords',
                required:true
            },
            {
                label: 'Enter youtube description Outline here',
                field: 'textarea',
                name: 'outline'
            }
        ]

    },
    {

        name: 'Youtube Description',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        category: 'Youtube Tool',
        icon: 'https://cdn-icons-png.flaticon.com/128/2111/2111748.png',
        slug: 'youtube-description',
        aiPrompt: 'Generate Youtube description with emoji under 4-5 lines based on topic and outline in rich text editor format',
        form: [
            {
                label: 'Enter your blog topic/title',
                field: 'input',
                name: 'topic',
                required:true
            },
            {
                label: 'Enter youtube Outline here',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Youtube Tags',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        category: 'Youtube Tool',
        icon: 'https://cdn-icons-png.flaticon.com/128/4674/4674918.png',
        slug: 'youtube-tag',

        aiPrompt: 'Generate 10 Youtube tags in bullet point based on title and outline in rich text editor format',

        form: [
            {
                label: 'Enter your youtube title',
                field: 'input',
                name: 'title',
                required:true
            },
            {
                label: 'Enter youtube video Outline here (Optional)',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },

    {
        name: 'Rewrite Article (Plagiarism Free)',
        desc: 'Use this tool to rewrite existing Article or Blog Post which can bypass AI detectors and also make it plagiarism free.',
        icon: 'https://cdn-icons-png.flaticon.com/128/3131/3131607.png',
        category: 'Rewriting Tool',
        slug: 'rewrite-article',
        aiPrompt: 'Rewrite give article without any Plagiarism in rich text editor format',
        form: [
            {
                label: '🤖 Provide your Article/Blogpost or any other content to rewrite.',
                field: 'textarea',
                name: 'article',
                required:true
            }
        ]
    },
    {
        name: 'Text Improver',
        desc: 'This handy tool refines your writing, eliminating errors and redundancies for a clear, readable result. It also offers a comprehensive tone analysis and suggests better word choices.',
        icon: 'https://cdn-icons-png.flaticon.com/128/1686/1686815.png',
        category: 'Writing Assistant',
        slug: 'text-improver',
        aiPrompt: 'Given textToImprove, Rewrite text without any grammar mistake and professionally in rich text editor format',
        form: [
            {
                label: 'Enter text that you want to re-write or improve',
                field: 'textarea',
                name: 'textToImprove'
            }
        ]
    },
    {
        name: 'Add Emojis to Text',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        icon: 'https://cdn-icons-png.flaticon.com/128/2584/2584606.png',
        category: 'blog',
        slug: 'add-emoji-to-text',
        aiPrompt: 'Add Emoji to outline text depends on outline and rewrite it in rich text editor format',
        form: [
            {
                label: 'Enter your text to add emojis',
                field: 'textarea',
                name: 'outline',
                required:true
            }
        ]
    },
    {
        name: 'Instagram Post Generator',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        icon: 'https://cdn-icons-png.flaticon.com/128/15713/15713420.png',
        category: 'blog',
       
        slug: 'instagram-post-generator',
        aiPrompt: 'Generate 3 Instagram post depends on a given keywords and give output in  in rich text editor format',
        form: [
            {
                label: 'Enter Keywords for your post',
                field: 'input',
                name: 'keywords',
                required:true
            },
           
        ]
    },
    {
        name: 'Instagram Hash Tag Generator',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        icon: 'https://cdn-icons-png.flaticon.com/128/7045/7045432.png',
        category: 'blog',
       
        slug: 'instagram-hash-tag-generator',
        aiPrompt: 'Generate 15 Instagram hash tag depends on a given keywords and give output in  in rich text editor format',
        form: [
            {
                label: 'Enter Keywords for your instagram hastag',
                field: 'input',
                name: 'keywords',
                required:true
            },
           
        ]
    },
    {
        name: 'Instagram Post/Reel Idea',
        desc: 'An AI tool that generate New and trending instagram idea depends on your niche',
        icon: 'https://cdn-icons-png.flaticon.com/128/1029/1029183.png',
        category: 'instagram',
       
        slug: 'instagram-post-idea-generator',
        aiPrompt: 'Generate 5-10 Instagram idea depends on niche with latest trend and give output in  in rich text editor format',
        form: [
            {
                label: 'Enter Keywords / Niche for your instagram idea',
                field: 'input',
                name: 'keywords',
                required:true
            },
           
        ]
    },
    {
        name: 'English Grammer Check',
        desc: 'AI Model to Correct your english grammer by providing the text',
        icon:'https://cdn-icons-png.flaticon.com/128/12596/12596700.png',
        category: 'english',
       
        slug: 'english-grammer-checker',
        aiPrompt: 'Rewrite the inputText by correcting the grammer and give output in  in rich text editor format',
        form: [
            {
                label: 'Enter text to correct the grammer',
                field: 'input',
                name: 'inputText',
                required:true
            },
           
        ]
    },
    {
        name: 'Write Code',
        desc: 'AI Model to generate programming code in any language',
        icon:'https://cdn-icons-png.flaticon.com/128/6062/6062646.png',
        category: 'Coding',
       
        slug: 'write-code',
        aiPrompt: 'Depends on user codeDescription write a code and give output in  in rich text editor format in code block ',
        form: [
            {
                label: 'Enter description of code you want along with Programming Lang',
                field: 'textarea',
                name: 'codeDesscripton',
                required:true
            },
           
        ]
    },
    {
        name: 'Explain Code',
        desc: 'AI Model to explain programming code in any language',
        icon:'https://cdn-icons-png.flaticon.com/128/8488/8488751.png',
        category: 'Coding',
       
        slug: 'explain-code',
        aiPrompt: 'Depends on user codeDescription explain code line by line and give output in  in rich text editor format in code block ',
        form: [
            {
                label: 'Enter code which you want to understand',
                field: 'textarea',
                name: 'codeDesscripton',
                required:true
            },
           
        ]
    },
    {
        name: 'Code Bug Detector',
        desc: 'This tool analyzes your input, like error messages and code snippets, to pinpoint and fix bugs, offering detailed solutions and alternatives in a straightforward, user-friendly way.',
        icon:'https://cdn-icons-png.flaticon.com/128/4426/4426267.png',
        category: 'code-bug-detector',
        slug: 'code-bug-detector',
        aiPrompt: 'Depends on user codeInput find bug in code and give solution and give output in  in rich text editor format in code block ',
        form: [
            {
                label: 'Enter code which you want to test bug',
                field: 'textarea',
                name: 'codeInput',
                required:true
            },
           
        ]
    },
    {
        name: 'Tagline Generator',
        desc: 'Struggling to find the perfect tagline for your brand? Let our AI-tool assist you in creating a tagline that stands out.',
        icon:'https://cdn-icons-png.flaticon.com/128/2178/2178616.png',
        category: 'Marketting',
        slug: 'tagline-generator',
        aiPrompt: 'Depends on user productName and outline generate catchy 5-10 tagline for the business product and give output  in rich text editor format ',
        form: [
            {
                label: 'Product/Brand Name',
                field: 'input',
                name: 'productName',
                required:true
            },
            {
                label: 'What you are selling / Marketting',
                field: 'textarea',
                name: 'outline',
                required:true
            },
           
        ]
    },
    {
        name: 'Product Description',
        desc: 'This is your AI-powered SEO expert, creating captivating and keyword-rich e-commerce product descriptions to boost your online sales.',
        icon:'https://cdn-icons-png.flaticon.com/128/679/679922.png',
        category: 'Marketting',
       
        slug: 'product-description',
        aiPrompt: 'Depends on user productName and description generate small description for product for e-commer business give output  in rich text editor format  ',
        form: [
            {
                label: 'Product Name',
                field: 'input',
                name: 'productName',
                required:true
            },
            {
                label: 'Product Details',
                field: 'textarea',
                name: 'outline',
                required:true
            },
              
        ]},
        {
            name: "Stock Market Prediction",
            desc: "Predicts stock price trends based on historical data.",
            icon: "https://cdn-icons-png.flaticon.com/128/4234/4234077.png",
            category: "Finance & Trading",
            slug: "stock-market-prediction",
            aiPrompt: "Analyze historical stock data and predict future trends.",
            form: [
              {label: "Stock Symbol", field: "input", name: "symbol", required: true},
              {label: "Time Frame (Days)", field: "input", name: "days", required: true}
            ]
          },
        {
            name: "Sentiment Analysis",
            desc: "Analyzes the sentiment of a given text (positive, negative, neutral).",
            icon: "https://cdn-icons-png.flaticon.com/128/263/263098.png",
            category: "Text Analysis",
            slug: "sentiment-analysis",
            aiPrompt: "Analyze the sentiment of the given text and classify it as positive, neutral, or negative.",
            form: [
              {label: "Text Input", field: "textarea", name: "text", required: true}
            ]
          },
          {
            "name": "SEO Analyzer",
            "desc": "Analyzes a webpage URL and provides insights on title length, meta description, headings, alt attributes, and keyword density.",
            "icon": "https://cdn-icons-png.flaticon.com/128/942/942799.png",
            "category": "Website Analysis",
            "slug": "seo-analyzer",
            "aiPrompt": "Analyze the given webpage URL and extract key SEO elements such as title length, meta description, headings, image alt attributes, and keyword density. Provide suggestions for optimization.",
            "form": [
              { "label": "Webpage URL", "field": "input", "name": "url", "required": true }
            ]
          },          
          {
            name: "Named Entity Recognition (NER)",
            desc: "Identifies proper names, places, dates, and other named entities in text.",
            icon: "https://cdn-icons-png.flaticon.com/128/263/263098.png",
            category: "Text Analysis",
            slug: "named-entity-recognition",
            aiPrompt: "Extract named entities such as people, organizations, and locations from the input text.",
            form: [
              {label: "Text Input", field: "textarea", name: "text", required: true}
            ]
          },
          {
            name: "Text Summarization",
            desc: "Generates a concise summary of the given text.",
            icon: "https://cdn-icons-png.flaticon.com/128/3135/3135715.png",
            category: "Text Analysis",
            slug: "text-summarization",
            aiPrompt: "Summarize the given text into a short and concise version while maintaining key information.",
            form: [
              {label: "Text Input", field: "textarea", name: "text", required: true}
            ]
          },
          {
            name: "Question Answering",
            desc: "Answers questions based on a given passage of text.",
            icon: "https://cdn-icons-png.flaticon.com/128/2038/2038914.png",
            category: "AI Assistant",
            slug: "question-answering",
            aiPrompt: "Answer the user's question based on the provided context paragraph.",
            form: [
              {label: "Context Paragraph", field: "textarea", name: "context", required: true},
              {label: "Question", field: "input", name: "question", required: true}
            ]
          },
          {
            name: "Machine Translation",
            desc: "Translates text between different languages.",
            icon: "https://cdn-icons-png.flaticon.com/128/2620/2620583.png",
            category: "Language Processing",
            slug: "machine-translation",
            aiPrompt: "Translate the given text from the source language to the target language.",
            form: [
              {label: "Text Input", field: "textarea", name: "text", required: true},
              {label: "Source Language", field: "input", name: "sourceLang", required: true},
              {label: "Target Language", field: "input", name: "targetLang", required: true}
            ]
          },
          {
            name: "Spam Detection",
            desc: "Classifies messages as spam or not spam.",
            icon: "https://cdn-icons-png.flaticon.com/128/1198/1198325.png",
            category: "Text Analysis",
            slug: "spam-detection",
            aiPrompt: "Classify the given message as spam or not spam.",
            form: [
              {label: "Message Input", field: "textarea", name: "message", required: true}
            ]
          },
          {
            name: "Plagiarism Detection",
            desc: "Detects duplicate or copied content in a document.",
            icon: "https://cdn-icons-png.flaticon.com/128/1159/1159643.png",
            category: "Text Analysis",
            slug: "plagiarism-detection",
            aiPrompt: "Check the given text for plagiarism and provide a percentage score.",
            form: [
              {label: "Text Input", field: "textarea", name: "text", required: true}
            ]
          },
          {
            name: "Fake News Detection",
            desc: "Identifies whether a given news article is real or fake.",
            icon: "https://cdn-icons-png.flaticon.com/128/1041/1041916.png",
            category: "News & Media",
            slug: "fake-news-detection",
            aiPrompt: "Determine whether the given news article is real or fake with a confidence score.",
            form: [
              {label: "News Text", field: "textarea", name: "news", required: true}
            ]
          }



]