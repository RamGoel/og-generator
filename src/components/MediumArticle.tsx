import { useEffect, useState } from 'react'
import generateOGImage from '../utils/generate-og'

const MediumArticle = () => {
    const [data] = useState({
        title: 'The Art of Crafting Compelling Stories',
        author: 'John Doe',
        date: '2022-01-01',
        image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*1wohMaUPB-R9fTHygpN5sQ.png',
        readTime: '8 min read',
        authorImage: 'https://randomuser.me/api/portraits/men/32.jpg',
        upvotes: '100',
        content:
            "In the realm of storytelling, the art of crafting compelling narratives is a skill that transcends mere words on a page. It's about weaving intricate tapestries of emotion, character, and plot that captivate readers and transport them to new worlds. Whether you're a seasoned author or an aspiring wordsmith, understanding the nuances of storytelling can elevate your writing to new heights.",
    })

    useEffect(() => {
        generateOGImage()
    }, [])

    return (
        <div className="bg-white min-h-screen">
            <header className="border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <img
                        src="https://miro.medium.com/max/8978/1*s986xIGqhfsN8U--09_AdA.png"
                        alt="Medium"
                        className="h-8"
                    />
                </div>
            </header>
            <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <article>
                    <h1 className="text-4xl font-bold mb-4 text-gray-900">
                        {data.title}
                    </h1>

                    <div className="flex items-center mb-8">
                        <img
                            src={data.authorImage}
                            alt="Author"
                            className="w-12 h-12 rounded-full mr-4"
                        />
                        <div>
                            <p className="text-gray-900 font-semibold">
                                {data.author}
                            </p>
                            <p className="text-gray-500 text-sm">
                                {data.date} · {data.readTime}
                            </p>
                        </div>
                    </div>

                    <img
                        src={data.image}
                        alt="Cover"
                        className="w-full h-96 object-cover mb-8 rounded-lg"
                    />

                    <div className="prose prose-lg">
                        <p>{data.content}</p>

                        <h2 className="text-2xl font-semibold leading-loose">
                            The Power of Character Development
                        </h2>
                        <p>
                            At the heart of every great story lies its
                            characters. They are the vessels through which
                            readers experience the narrative, and their growth
                            and evolution drive the plot forward. To create
                            truly memorable characters, one must delve deep into
                            their psyche, understanding their motivations,
                            fears, and desires.
                        </p>

                        <p>
                            Consider the complexity of human nature and how it
                            can be reflected in your characters. Are they
                            flawed? Do they have internal conflicts? How do they
                            change throughout the story? By answering these
                            questions, you breathe life into your characters,
                            making them relatable and engaging for your readers.
                        </p>

                        <h2 className="text-2xl font-semibold leading-loose">
                            The Art of World-Building
                        </h2>
                        <p>
                            Whether your story is set in a bustling metropolis
                            or a far-off galaxy, the world you create serves as
                            the stage for your narrative. Rich, detailed
                            settings can enhance the reader's immersion and add
                            depth to your story. However, the key lies in
                            striking a balance – providing enough detail to
                            paint a vivid picture without overwhelming the
                            reader with unnecessary information.
                        </p>

                        <p>
                            Remember, world-building isn't just about physical
                            descriptions. It encompasses the culture, history,
                            and social dynamics of your setting. These elements
                            can add layers of complexity to your story and
                            influence your characters' actions and decisions.
                        </p>

                        <h2 className="text-2xl font-semibold leading-loose">
                            The Rhythm of Pacing
                        </h2>
                        <p>
                            Pacing is the heartbeat of your story. It determines
                            how quickly or slowly events unfold and plays a
                            crucial role in maintaining reader engagement. A
                            well-paced story knows when to speed up for exciting
                            action sequences and when to slow down for emotional
                            moments or important revelations.
                        </p>

                        <p>
                            Experiment with different pacing techniques. Use
                            short, punchy sentences to quicken the pace, or
                            longer, more descriptive passages to slow things
                            down. Remember, variety is key – a story that
                            maintains the same pace throughout risks becoming
                            monotonous.
                        </p>

                        <h2 className="text-2xl font-semibold leading-loose">
                            Conclusion
                        </h2>
                        <p>
                            Crafting compelling stories is an art form that
                            combines creativity, skill, and a deep understanding
                            of human nature. By focusing on character
                            development, world-building, and pacing, you can
                            create narratives that not only entertain but also
                            resonate with your readers on a profound level.
                            Remember, the most powerful stories are those that
                            linger in the mind long after the final page has
                            been turned.
                        </p>
                    </div>
                </article>

                <div className="mt-12 border-t border-gray-200 pt-8">
                    <h3 className="text-lg font-semibold mb-4">
                        More from John Doe
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-semibold mb-2">
                                The Psychology of Creative Writing
                            </h4>
                            <p className="text-gray-500 text-sm">
                                Exploring the mental processes behind crafting
                                engaging narratives
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">
                                5 Essential Tools for Every Writer
                            </h4>
                            <p className="text-gray-500 text-sm">
                                Boost your productivity and creativity with
                                these must-have writing tools
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="bg-gray-100 mt-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <p className="text-center text-gray-500 text-sm">
                        © 2024 Medium-like UI. All rights reserved.
                    </p>
                </div>
            </footer>

            <div
                className="w-[1200px] h-[630px] p-[20px] bg-white"
                id="og-image-container"
            >
                <div className="flex items-center border-[1px] border-[#e1e4e8] rounded-[10px] shadow-lg">
                    <div className="p-[20px]">
                        <div className="text-[50px] mb-[10px] text-[#333]">
                            {data.title}
                        </div>
                        <div className="flex items-center mb-[10px]">
                            <img
                                src={data.authorImage}
                                alt="Author"
                                className="rounded-[50%] w-[60px] h-[60px] mr-[22px]"
                            />
                            <div className="text-[#888] text-[22px]">
                                <div className="font-semibold">
                                    {data.author}
                                </div>
                                <div>{data.date}</div>
                            </div>
                        </div>
                        <div className="mt-[20px] text-[#888] text-[22px]">
                            Upvotes: {data.upvotes}
                        </div>
                        <div className="mt-[20px] text-[#888] text-[22px]">
                            Read Time: {data.readTime}
                        </div>
                        <p className="text-[22px]">{data.content}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MediumArticle
