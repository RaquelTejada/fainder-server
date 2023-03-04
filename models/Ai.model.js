const { Schema, model } = require('mongoose')

const aiSchema = new Schema(
    {

        name: {
            type: String,
            trim: true,
            required: [true, 'Ai name is mandatory']
        },

        image: {
            type: String
        },

        pricing: {
            type: String,
            required: [true, 'Choose an Ai price']
        },

        Features: {
            type: String,
            required: [true, 'Choose an Ai feature']
        },

        category: {
            type: String,
            enum: ['3D', 'art', 'audio editing', 'avatars', 'code assistant', 'copywriting', 'customer support',
                'design assistant', 'developer tools', 'e-commerce', 'education assistant', 'email assistant',
                'experiments', 'fashion', 'finance', 'fun tools', 'gaming', 'general writing', 'gift ideas',
                'healthcare', 'human resources', 'image editing', 'image generator', 'legal assistant', 'life assistant',
                'logo generator', 'low-code/no-code', 'memory', 'music', 'paraphraser', 'personalized videos',
                'presentations', 'productivity', 'prompts', 'real estate', 'research', 'resources', 'sales', 'search engine',
                'SEO', 'social media assistant', 'spreadsheets', 'SQL', 'starup tools', 'story teller', ' summarizer',
                'text to speech', 'transcriber', 'video editing', 'video generator'],
            required: [true, 'Videogame category is mandatory']
        },

        characteristics: [{
            type: String,
            enum: ['verified', 'new', 'popular']
        }],

        owner: {
            type: Schema.Types.ObjectId,
            ref: 'Admin'
        },
    },

    {
        timestamps: true
    }
)

const Ai = model('Ai', aiSchema)

module.exports = Ai