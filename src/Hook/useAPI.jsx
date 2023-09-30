import React from 'react'

const useAPI = () => {
    const trainers = [
        {
            id: 1,
            name: "John",
            activity: "Tennis",
            information: "Professional tennis player with multiple championships.",
            img: "https://example.com/john.jpg"
        },
        {
            id: 2,
            name: "Alice",
            activity: "Badminton",
            information: "Enjoys playing badminton in the local club.",
            img: "https://example.com/alice.jpg"
        },
        {
            id: 3,
            name: "Bob",
            activity: "Table Tennis",
            information: "Loves table tennis and participates in table tennis competitions.",
            img: "https://example.com/bob.jpg"
        },
        {
            id: 4,
            name: "Eva",
            activity: "Yoga",
            information: "Dedicated yogi with a daily practice.",
            img: "https://example.com/eva.jpg"
        },
        {
            id: 5,
            name: "Grace",
            activity: "Aerobic Dance",
            information: "Teaches aerobic dance classes at the gym.",
            img: "https://example.com/grace.jpg"
        },
        {
            id: 6,
            name: "Michael",
            activity: "Tennis",
            information: "Competitive tennis player in regional tournaments.",
            img: "https://example.com/michael.jpg"
        },
        {
            id: 7,
            name: "Sophia",
            activity: "Table Tennis",
            information: "Table tennis enthusiast and lifeguard.",
            img: "https://example.com/sophia.jpg"
        },
        {
            id: 8,
            name: "David",
            activity: "Badminton",
            information: "Badminton player who enjoys friendly matches.",
            img: "https://example.com/david.jpg"
        },
        {
            id: 9,
            name: "Olivia",
            activity: "Yoga",
            information: "Certified yoga instructor and mindfulness advocate.",
            img: "https://example.com/olivia.jpg"
        },
        {
            id: 10,
            name: "William",
            activity: "Tennis",
            information: "Tennis coach and former professional player.",
            img: "https://example.com/william.jpg"
        }
      ];

  return { trainers };
}

export default useAPI