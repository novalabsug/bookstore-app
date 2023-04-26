const DEV_SERVER_URL = 'http://127.0.0.1:3501';

const PROD_SERVER_URL = 'https://booksbyme.onrender.com';

export const Genres = [
  {
    label: 'Horror',
    value: 'horror',
  },
  {
    label: 'Mystery/Crime',
    value: 'mystery/crime',
  },
  {
    label: 'Romance',
    value: 'romance',
  },
  {
    label: 'Sci-Fi',
    value: 'sci-fi',
  },
  {
    label: 'Thriller',
    value: 'thriller',
  },
  {
    label: 'Hystorical',
    value: 'hystorical',
  },
  {
    label: 'Young Adult',
    value: 'youngAdult',
  },
  {
    label: 'Adventure',
    value: 'adventure',
  },
  {
    label: 'Religious',
    value: 'religious',
  },
  {
    label: 'Gothic',
    value: 'gothic',
  },
  {
    label: 'Non-Fiction',
    value: 'non-fiction',
  },
];

export const Books = [
  {
    _id: 1,
    title: 'Unlocking Android',
    isbn: '1933988673',
    pageCount: 416,
    publishedDate: {
      $date: '2009-04-01T00:00:00.000-0700',
    },
    thumbnailUrl:
      'https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg',
    shortDescription:
      "Unlocking Android: A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout.",
    longDescription:
      "Android is an open source mobile phone platform based on the Linux operating system and developed by the Open Handset Alliance, a consortium of over 30 hardware, software and telecom companies that focus on open standards for mobile devices. Led by search giant, Google, Android is designed to deliver a better and more open and cost effective mobile experience.    Unlocking Android: A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout. Based on his mobile development experience and his deep knowledge of the arcane Android technical documentation, the author conveys the know-how you need to develop practical applications that build upon or replace any of Androids features, however small.    Unlocking Android: A Developer's Guide prepares the reader to embrace the platform in easy-to-understand language and builds on this foundation with re-usable Java code examples. It is ideal for corporate and hobbyists alike who have an interest, or a mandate, to deliver software functionality for cell phones.    WHAT'S INSIDE:        * Android's place in the market      * Using the Eclipse environment for Android development      * The Intents - how and why they are used      * Application classes:            o Activity            o Service            o IntentReceiver       * User interface design      * Using the ContentProvider to manage data      * Persisting data with the SQLite database      * Networking examples      * Telephony applications      * Notification methods      * OpenGL, animation & multimedia      * Sample Applications  ",
    status: 'PUBLISH',
    authors: ['W. Frank Ableson', 'Charlie Collins', 'Robi Sen'],
    categories: ['Open Source', 'Mobile'],
  },
  {
    _id: 2,
    title: 'Android in Action, Second Edition',
    isbn: '1935182722',
    pageCount: 592,
    publishedDate: {
      $date: '2011-01-14T00:00:00.000-0800',
    },
    thumbnailUrl:
      'https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson2.jpg',
    shortDescription:
      "Android in Action, Second Edition is a comprehensive tutorial for Android developers. Taking you far beyond \"Hello Android,\" this fast-paced book puts you in the driver's seat as you learn important architectural concepts and implementation strategies. You'll master the SDK, build WebKit apps using HTML 5, and even learn to extend or replace Android's built-in features by building useful and intriguing examples. ",
    longDescription:
      "When it comes to mobile apps, Android can do almost anything   and with this book, so can you! Android runs on mobile devices ranging from smart phones to tablets to countless special-purpose gadgets. It's the broadest mobile platform available.    Android in Action, Second Edition is a comprehensive tutorial for Android developers. Taking you far beyond \"Hello Android,\" this fast-paced book puts you in the driver's seat as you learn important architectural concepts and implementation strategies. You'll master the SDK, build WebKit apps using HTML 5, and even learn to extend or replace Android's built-in features by building useful and intriguing examples.",
    status: 'PUBLISH',
    authors: ['W. Frank Ableson', 'Robi Sen'],
    categories: ['Java'],
  },
  {
    _id: 3,
    title: 'Specification by Example',
    isbn: '1617290084',
    pageCount: 342,
    publishedDate: {
      $date: '2011-06-03T00:00:00.000-0700',
    },
    thumbnailUrl:
      'https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/adzic.jpg',
    status: 'PUBLISH',
    authors: ['Gojko Adzic'],
    categories: ['Software Engineering'],
  },
  {
    _id: 4,
    title: 'Flex 3 in Action',
    isbn: '1933988746',
    pageCount: 576,
    publishedDate: {
      $date: '2009-02-02T00:00:00.000-0800',
    },
    thumbnailUrl:
      'https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed.jpg',
    longDescription:
      "New web applications require engaging user-friendly interfaces   and the cooler, the better. With Flex 3, web developers at any skill level can create high-quality, effective, and interactive Rich Internet Applications (RIAs) quickly and easily. Flex removes the complexity barrier from RIA development by offering sophisticated tools and a straightforward programming language so you can focus on what you want to do instead of how to do it. And now that the major components of Flex are free and open-source, the cost barrier is gone, as well!    Flex 3 in Action is an easy-to-follow, hands-on Flex tutorial. Chock-full of examples, this book goes beyond feature coverage and helps you put Flex to work in real day-to-day tasks. You'll quickly master the Flex API and learn to apply the techniques that make your Flex applications stand out from the crowd.    Interesting themes, styles, and skins  It's in there.  Working with databases  You got it.  Interactive forms and validation  You bet.  Charting techniques to help you visualize data  Bam!  The expert authors of Flex 3 in Action have one goal   to help you get down to business with Flex 3. Fast.    Many Flex books are overwhelming to new users   focusing on the complexities of the language and the super-specialized subjects in the Flex eco-system; Flex 3 in Action filters out the noise and dives into the core topics you need every day. Using numerous easy-to-understand examples, Flex 3 in Action gives you a strong foundation that you can build on as the complexity of your projects increases.",
    status: 'PUBLISH',
    authors: ['Tariq Ahmed with Jon Hirschi', 'Faisal Abid'],
    categories: ['Internet'],
  },
  {
    _id: 5,
    title: 'Flex 4 in Action',
    isbn: '1935182420',
    pageCount: 600,
    publishedDate: {
      $date: '2010-11-15T00:00:00.000-0800',
    },
    thumbnailUrl:
      'https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed2.jpg',
    longDescription:
      'Using Flex, you can create high-quality, effective, and interactive Rich Internet Applications (RIAs) quickly and easily. Flex removes the complexity barrier from RIA development by offering sophisticated tools and a straightforward programming language so you can focus on what you want to do instead of how to do it. And the new features added in Flex 4 give you an even wider range of options!    Flex 4 in Action is an easy-to-follow, hands-on Flex tutorial that goes beyond feature coverage and helps you put Flex to work in real day-to-day tasks. You\'ll quickly master the Flex API and learn to apply the techniques that make your Flex applications stand out from the crowd.    The expert authors of Flex 4 in Action have one goal-to help you get down to business with Flex. Fast. Flex 4 in Action filters out the noise and dives into the core topics you need every day. Using numerous easy-to-understand examples, Flex 4 in Action gives you a strong foundation that you can build on as the complexity of your projects increases.    Interesting themes, styles, and skins  It\'s in there.  Working with databases  You got it.  Interactive forms and validation  You bet.  Charting techniques to help you visualize data  Bam!  And you\'ll get full coverage of these great Flex 4 upgrades:  Next generation Spark components-New buttons, form inputs, navigation controls and other visual components replace the Flex 3 "Halo" versions. Spark components are easier to customize, which makes skinning and theme design much faster  A new "network monitor" allows you to see the data communications between a Flex application and a backend server, which helps when trying to debug applications that are communicating to another system/service  Numerous productivity boosting features that speed up the process of creating applications  A faster compiler to take your human-written source code and convert it into a machine-readable format  Built-in support for unit testing allows you to improve the quality of your software, and reduce the time spent in testing',
    status: 'PUBLISH',
    authors: ['Tariq Ahmed', 'Dan Orlando', 'John C. Bland II', 'Joel Hooks'],
    categories: ['Internet'],
  },
  {
    _id: 6,
    title: 'Collective Intelligence in Action',
    isbn: '1933988312',
    pageCount: 425,
    publishedDate: {
      $date: '2008-10-01T00:00:00.000-0700',
    },
    thumbnailUrl:
      'https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/alag.jpg',
    longDescription:
      "There's a great deal of wisdom in a crowd, but how do you listen to a thousand people talking at once  Identifying the wants, needs, and knowledge of internet users can be like listening to a mob.    In the Web 2.0 era, leveraging the collective power of user contributions, interactions, and feedback is the key to market dominance. A new category of powerful programming techniques lets you discover the patterns, inter-relationships, and individual profiles   the collective intelligence   locked in the data people leave behind as they surf websites, post blogs, and interact with other users.    Collective Intelligence in Action is a hands-on guidebook for implementing collective-intelligence concepts using Java. It is the first Java-based book to emphasize the underlying algorithms and technical implementation of vital data gathering and mining techniques like analyzing trends, discovering relationships, and making predictions. It provides a pragmatic approach to personalization by combining content-based analysis with collaborative approaches.    This book is for Java developers implementing collective intelligence in real, high-use applications. Following a running example in which you harvest and use information from blogs, you learn to develop software that you can embed in your own applications. The code examples are immediately reusable and give the Java developer a working collective intelligence toolkit.    Along the way, you work with, a number of APIs and open-source toolkits including text analysis and search using Lucene, web-crawling using Nutch, and applying machine learning algorithms using WEKA and the Java Data Mining (JDM) standard.",
    status: 'PUBLISH',
    authors: ['Satnam Alag'],
    categories: ['Internet'],
  },
  {
    _id: 21,
    title: '3D User Interfaces with Java 3D',
    isbn: '1884777902',
    pageCount: 520,
    publishedDate: {
      $date: '2000-08-01T00:00:00.000-0700',
    },
    thumbnailUrl:
      'https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/barrilleaux.jpg',
    longDescription:
      "3D User Interfaces with Java 3D is a practical guide for providing next-generation applications with 3D user interfaces for manipulation of in-scene objects. Emphasis is on standalone and web-based business applications, such as for online sales and mass customization, but much of what this book offers has broad applicability to 3D user interfaces in other pursuits such as scientific visualization and gaming.  This book provides an extensive conceptual framework for 3D user interface techniques, and an in-depth introduction to user interface support in the Java 3D API, including such topics as picking, collision, and drag-and-drop. Many of the techniques are demonstrated in a Java 3D software framework included with the book, which also provides developers with many general-purpose building blocks for constructing their own user interfaces.    Applications and their use of 3D are approached realistically. The book is geared towards sophisticated user interfaces for the \"everyday user\" who doesn't have a lot of time to learn another application--much less a complicated one--and an everyday computer system without exotic devices like head mounted displays and data gloves. Perhaps the best description of this book is: A roadmap from Java 3D to 'Swing 3D'.",
    status: 'PUBLISH',
    authors: ['Jon Barrilleaux'],
    categories: ['Java', 'Computer Graphics'],
  },
  {
    _id: 24,
    title: 'Java Persistence with Hibernate',
    isbn: '1932394885',
    pageCount: 880,
    publishedDate: {
      $date: '2006-11-01T00:00:00.000-0800',
    },
    thumbnailUrl:
      'https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bauer2.jpg',
    shortDescription:
      '"...this book is the ultimate solution. If you are going to use Hibernate in your application, you have no other choice, go rush to the store and get this book." --JavaLobby',
    longDescription:
      "Persistence -- the ability of data to outlive an instance of a program -- is central to modern applications. Hibernate, the most popular Java persistence tool, provides automatic and transparent object/relational mapping so it's a snap to work with SQL databases in Java applications. Hibernate conforms to the new EJB 3.0 and Java Persistence 1.0 standards.    Java Persistence with Hibernate explores Hibernate by developing an application that ties together hundreds of individual examples. You'll immediately dig into the rich programming model of Hibernate 3.2 and Java Persistence, working through queries, fetching strategies, caching, transactions, conversations, and more. You'll also appreciate the well-illustrated discussion of best practices in database design, object/relational mapping, and optimization techniques.    In this revised edition of Manning's bestselling Hibernate in Action, authors Christian Bauer and Gavin King -- the founder of the Hibernate project -- cover Hibernate 3.2 in detail along with the EJB 3.0 and Java Persistence 1.0 standards.",
    status: 'PUBLISH',
    authors: ['Christian Bauer', 'Gavin King'],
    categories: ['Java'],
  },
  {
    _id: 18,
    title: 'Distributed Application Development with PowerBuilder 6.0',
    isbn: '1884777686',
    pageCount: 504,
    publishedDate: {
      $date: '1998-06-01T00:00:00.000-0700',
    },
    thumbnailUrl:
      'https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bibeault2.jpg',
    longDescription:
      'Distributed Application Development with PowerBuilder 6.0 is a vital source for the PowerBuilder programmer; it provides the sort of detailed coverage of Distributed PowerBuilder that you can find nowwhere else.    The book opens with a discussion of distributed computing in general, as well as its design principles and technologies. Then Distributed PowerBuilder is examined in detail. By building a simple application step by step, the author discusses all of the concepts and components needed for building a PowerBuilder application and shows how to make the application available over a network.    Finally, the author explores how PowerBuilder can be used in distributed solutions both with and without using DPB.    Distributed Application Development with PowerBuilder 6.0 is for any PowerBuilder developer looking for information on distributed computing options with the PowerBuilder environment. IS managers, system architects, and developers using many different technologies can learn how PowerBuilder can be used as all or part of the solution for building distributed applications.    The main topic of this book is Distributed PowerBuilder (DPB). It covers the basics of building a DPB application and walks through each new feature with examples including the Shared object, DataWindow synchronization, Server Push and Web.PB. It also explains distributed computing technologies and design principles so that your application can be built to handle the stresses of a distributed environment.  ',
    status: 'PUBLISH',
    authors: ['Michael J. Barlotta'],
    categories: ['PowerBuilder'],
  },
];

export const Profile = JSON.parse(localStorage.getItem('bookstore'));

export const DB_URL = PROD_SERVER_URL;
