let locale = 'vi_VN';
locale = 'en_US';
locale = '';

const cardTemplate = {
    typeNode: 'element',
    tag: 'div',
    className: ['card'],
    nodes: [
        {
            typeNode: 'element',
            tag: 'div',
            className: ['card__header'],
            nodes: [
                {
                    typeNode: 'element',
                    tag: 'h1',
                    className: [],
                    nodes: [
                        {
                            typeNode: 'text',
                            textContent: {
                                vi_VN: {
                                    content: 'Trần Lê Anh Vũ',
                                    isDefault: true
                                },
                                en_US: {
                                    content: 'Thomas.Tran',
                                    isDefault: false
                                }
                            }
                        },
                        {
                            typeNode: 'element',
                            tag: 'button',
                            nodes: [
                                {
                                    typeNode: 'text',
                                    textContent: {
                                        vi_VN: {
                                            content: 'Cal mme',
                                            isDefault: true
                                        },
                                        en_US: {
                                            content: 'Thomas.Tran',
                                            isDefault: false
                                        }
                                    }
                                },
                            ]
                        }
                    ]
                }
            ]
        },
        {
            typeNode: 'element',
            tag: 'div',
            className: ['card__body'],
            nodes: [
                {
                    typeNode: 'element',
                    tag: 'img',
                    className: [],
                    attribtues: {
                        alt: 'man',
                        width: '100%',
                        src: 'https://img.freepik.com/free-photo/portrait-serious-concentrated-man-white-shirt_171337-17406.jpg?w=1380&t=st=1676300672~exp=1676301272~hmac=df9962e4b7f8a7df163615f9b758278710e5378d73e564872dccb1d2d4ce984d'
                    }
                },
                {
                    typeNode: 'element',
                    tag: 'p',
                    className: ['card__description'],
                    nodes: [
                        {
                            typeNode: 'text',
                            textContent: {
                                vi_VN: {
                                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique aliquid pariatur temporibus ipsum accusantium placeat esse corporis, et magnam incidunt vero.',
                                    isDefault: false
                                },
                                en_US: {
                                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique aliquid pariatur temporibus ipsum accusantium placeat esse corporis, et magnam incidunt vero.',
                                    isDefault: true
                                }
                            }
                        }
                    ]


                },
            ]
        },
        {
            typeNode: 'element',
            tag: 'div',
            className: ['card__footer'],
            nodes: [
                {
                    typeNode: 'element',
                    tag: 'button',
                    className: ['btn-call-me'],
                    nodes: [
                        {
                            typeNode: 'text',
                            textContent: {
                                vi_VN: {
                                    content: 'Gọi tôi nhé!',
                                    isDefault: true
                                },
                                en_US: {
                                    content: 'Call me!',
                                    isDefault: false
                                }
                            }
                        }
                    ]
                },
                {
                    typeNode: 'element',
                    tag: 'button',
                    className: ['btn-skip'],
                    nodes: [
                        {
                            typeNode: 'text',
                            textContent: {
                                vi_VN: {
                                    content: 'Bỏ qua tôi',
                                    isDefault: true
                                },
                                en_US: {
                                    content: 'Skip!',
                                    isDefault: false
                                }
                            }
                        }
                    ]
                }
            ]
        },
    ]
}

const wrapperElement = document.getElementById("cardTemplate");

const elm = createElement(cardTemplate);

function createElement(elmData) {
    const {
        tag,
        className,
        nodes,
        attribtues
    } = elmData;

    const parentElm = document.createElement(tag.toLowerCase());

    if(className && className.length > 0) {
        parentElm.classList.add(className);
    }

    if(attribtues) {
        for (const [key, value] of Object.entries(attribtues)) {
            parentElm.setAttribute(key, value);
        }
    }

    if(nodes && nodes.length > 0) {
        nodes.forEach(child => {
            let childElm = null;
            if(child.typeNode === 'element') {
                // child node
                childElm = createElement(child);
            } else {
                // text node
                let locLocale = locale || 'en_US';
                if(!locale) {
                    for (const [key, value] of Object.entries(child.textContent)) {
                        if(value.isDefault) {
                            locLocale = key;
                            break;
                        }
                    }
                }

                childElm = document.createTextNode(child.textContent[locLocale].content);

            }

            parentElm.appendChild(childElm);

        })
    }

    return parentElm;
}

wrapperElement.appendChild(elm);

const nestedObject = {
    key1: 'value1',
    key2: {
        key3: 'value2',
        key4: 'value3',
        key5: {
            key6: 'value4'
        }
    }
}

console.log('title: ', JSON.parse(JSON.stringify(cardTemplate)));
