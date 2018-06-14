let schemaData = {
  $id: 'http://example.com/example.json',
  type: 'object',
  definitions: {},
  $schema: 'http://json-schema.org/draft-07/schema#',
  properties: {
    id: {
      $id: '/properties/id',
      type: 'string',
      title: 'The Id Schema ',
      default: '',
      examples: ['id']
    },
    u_id: {
      $id: '/properties/u_id',
      type: 'string',
      title: 'The U_id Schema ',
      default: '',
      examples: ['user-id']
    },
    title: {
      $id: '/properties/title',
      type: 'string',
      title: 'The Title Schema ',
      default: '',
      examples: ['Richhang Falls']
    },
    probableCost: {
      $id: '/properties/probableCost',
      type: 'object',
      properties: {
        day: {
          $id: '/properties/probableCost/properties/day',
          type: 'integer',
          title: 'The Day Schema ',
          default: 0,
          examples: [1]
        },
        cost: {
          $id: '/properties/probableCost/properties/cost',
          type: 'string',
          title: 'The Cost Schema ',
          default: '',
          examples: ['780']
        }
      }
    },
    description: {
      $id: '/properties/description',
      type: 'string',
      title: 'The Description Schema ',
      default: '',
      examples: [
        'Richhang is another natural waterfall and one of the most attractive tourist destinations in Khagrachhari District of Bangladesh. Not so wide and not as great as Jadepai or Nafakhum, but this beautiful waterfall successfully surprised the domestic and foreign travelers with its intrinsic natural beauty.'
      ]
    },
    tags: {
      $id: '/properties/tags',
      type: 'array',
      items: {
        $id: '/properties/tags/items',
        type: 'string',
        title: 'The 0th Schema ',
        default: '',
        examples: ['waterfall', 'hill', 'chittagong', 'khagrachori', 'water']
      }
    },
    visit: {
      $id: '/properties/visit',
      type: 'object',
      properties: {
        start: {
          $id: '/properties/visit/properties/start',
          type: 'string',
          title: 'The Start Schema ',
          default: '',
          examples: ['date']
        },
        end: {
          $id: '/properties/visit/properties/end',
          type: 'string',
          title: 'The End Schema ',
          default: '',
          examples: ['date']
        }
      }
    },
    address: {
      $id: '/properties/address',
      type: 'array',
      items: {
        $id: '/properties/address/items',
        type: 'object',
        properties: {
          type: {
            $id: '/properties/address/items/properties/type',
            type: 'string',
            title: 'The Type Schema ',
            default: '',
            examples: ['place']
          },
          division: {
            $id: '/properties/address/items/properties/division',
            type: 'object',
            properties: {
              code: {
                $id: '/properties/address/items/properties/division/properties/code',
                type: 'integer',
                title: 'The Code Schema ',
                default: 0,
                examples: [20]
              },
              display: {
                $id: '/properties/address/items/properties/division/properties/display',
                type: 'string',
                title: 'The Display Schema ',
                default: '',
                examples: ['Chittagong']
              }
            }
          },
          district: {
            $id: '/properties/address/items/properties/district',
            type: 'object',
            properties: {
              code: {
                $id: '/properties/address/items/properties/district/properties/code',
                type: 'integer',
                title: 'The Code Schema ',
                default: 0,
                examples: [46]
              },
              display: {
                $id: '/properties/address/items/properties/district/properties/display',
                type: 'string',
                title: 'The Display Schema ',
                default: '',
                examples: ['Khagrachori']
              }
            }
          },
          area: {
            $id: '/properties/address/items/properties/area',
            type: 'object',
            properties: {
              code: {
                $id: '/properties/address/items/properties/area/properties/code',
                type: 'integer',
                title: 'The Code Schema ',
                default: 0,
                examples: [0]
              },
              display: {
                $id: '/properties/address/items/properties/area/properties/display',
                type: 'string',
                title: 'The Display Schema ',
                default: '',
                examples: ['']
              }
            }
          },
          street: {
            $id: '/properties/address/items/properties/street',
            type: 'string',
            title: 'The Street Schema ',
            default: '',
            examples: ['']
          },
          postal: {
            $id: '/properties/address/items/properties/postal',
            type: 'integer',
            title: 'The Postal Schema ',
            default: 0,
            examples: [1210]
          },
          longitude: {
            $id: '/properties/address/items/properties/longitude',
            type: 'string',
            title: 'The Longitude Schema ',
            default: '',
            examples: ['28.02525525']
          },
          latitude: {
            $id: '/properties/address/items/properties/latitude',
            type: 'string',
            title: 'The Latitude Schema ',
            default: '',
            examples: ['58.32656996']
          }
        }
      }
    },
    medium: {
      $id: '/properties/medium',
      type: 'array',
      items: {
        $id: '/properties/medium/items',
        type: 'object',
        properties: {
          step: {
            $id: '/properties/medium/items/properties/step',
            type: 'string',
            title: 'The Step Schema ',
            default: '',
            examples: ['step']
          },
          from: {
            $id: '/properties/medium/items/properties/from',
            type: 'object',
            properties: {
              code: {
                $id: '/properties/medium/items/properties/from/properties/code',
                type: 'integer',
                title: 'The Code Schema ',
                default: 0,
                examples: [20]
              },
              display: {
                $id: '/properties/medium/items/properties/from/properties/display',
                type: 'string',
                title: 'The Display Schema ',
                default: '',
                examples: ['Chittagong']
              }
            }
          },
          to: {
            $id: '/properties/medium/items/properties/to',
            type: 'object',
            properties: {
              code: {
                $id: '/properties/medium/items/properties/to/properties/code',
                type: 'integer',
                title: 'The Code Schema ',
                default: 0,
                examples: [20]
              },
              display: {
                $id: '/properties/medium/items/properties/to/properties/display',
                type: 'string',
                title: 'The Display Schema ',
                default: '',
                examples: ['Chittagong']
              }
            }
          },
          transport: {
            $id: '/properties/medium/items/properties/transport',
            type: 'array',
            items: {
              $id: '/properties/medium/items/properties/transport/items',
              type: 'object',
              properties: {
                type: {
                  $id: '/properties/medium/items/properties/transport/items/properties/type',
                  type: 'string',
                  title: 'The Type Schema ',
                  default: '',
                  examples: ['bus']
                },
                name: {
                  $id: '/properties/medium/items/properties/transport/items/properties/name',
                  type: 'string',
                  title: 'The Name Schema ',
                  default: '',
                  examples: ['Nabil']
                },
                cost: {
                  $id: '/properties/medium/items/properties/transport/items/properties/cost',
                  type: 'object',
                  properties: {
                    ac: {
                      $id: '/properties/medium/items/properties/transport/items/properties/cost/properties/ac',
                      type: 'string',
                      title: 'The Ac Schema ',
                      default: '',
                      examples: ['1200']
                    },
                    'non-ac': {
                      $id: '/properties/medium/items/properties/transport/items/properties/cost/properties/non-ac',
                      type: 'string',
                      title: 'The Non-ac Schema ',
                      default: '',
                      examples: ['580']
                    }
                  }
                },
                time: {
                  $id: '/properties/medium/items/properties/transport/items/properties/time',
                  type: 'string',
                  title: 'The Time Schema ',
                  default: '',
                  examples: ['']
                },
                additional: {
                  $id: '/properties/medium/items/properties/transport/items/properties/additional',
                  type: 'string',
                  title: 'The Additional Schema ',
                  default: '',
                  examples: ['jfdsajfldsjfldsaf']
                }
              }
            }
          }
        }
      }
    },
    stay: {
      $id: '/properties/stay',
      type: 'array',
      items: {
        $id: '/properties/stay/items',
        type: 'object',
        properties: {
          place: {
            $id: '/properties/stay/items/properties/place',
            type: 'object',
            properties: {
              code: {
                $id: '/properties/stay/items/properties/place/properties/code',
                type: 'string',
                title: 'The Code Schema ',
                default: '',
                examples: ['HT1566']
              },
              display: {
                $id: '/properties/stay/items/properties/place/properties/display',
                type: 'string',
                title: 'The Display Schema ',
                default: '',
                examples: ['Grand Hotel']
              }
            }
          },
          rooms: {
            $id: '/properties/stay/items/properties/rooms',
            type: 'array',
            items: {
              $id: '/properties/stay/items/properties/rooms/items',
              type: 'object',
              properties: {
                type: {
                  $id: '/properties/stay/items/properties/rooms/items/properties/type',
                  type: 'string',
                  title: 'The Type Schema ',
                  default: '',
                  examples: ['Normal']
                },
                cost: {
                  $id: '/properties/stay/items/properties/rooms/items/properties/cost',
                  type: 'string',
                  title: 'The Cost Schema ',
                  default: '',
                  examples: ['1200']
                }
              }
            }
          },
          additional: {
            $id: '/properties/stay/items/properties/additional',
            type: 'string',
            title: 'The Additional Schema ',
            default: '',
            examples: [
              'যাক ওখানে সকালের ব্রেকফাস্ট টা সেরে নিলাম।তারপর জনপ্রতি ৩০টাকা করে লোকাল সিএনজি করে হাজারিখিল ফরেস্ট অফিস পোঁছালাম।গাইড মান্নান ভাই (01815382431)এর সাথে কথা হলো।ওনার সাথে দরদাম মিললো না।তাই ওনাকে বিদাই করে দিলাম।আপনারা চাইলে নিতে পারেন। ফরেস্ট অফিস এর শাহাদাত ভাই এর সাথে কথা বললাম।উনি আমাদের রাস্তা দেখাই দিলেন। প্রথমেই গিরিপথ এর উদ্দেশ্যে রাওনা দিলাম। বাপরে, বনজঙ্গল যে এতো ভয়ানক হবে কে জানতো?😁এক অদ্ভুত পরিস্থিতির মাঝে পরে গেলাম। কয়েকজন তো ব্যাক দিতে চাইছে।😂 হাটতে হাটতে কিছুুদুর যাওয়ার পর গাইড শশী কুমার ভাই কে (01882820226) পাইলাম। তারপর গিড়িপথ,ঝড়না,৯০ডিগ্রি খাড়া পাহাড় সব কিছু দেখে নিলাম।প্রাই ৮ঘন্টা ট্রেকিং করলাম। ঝড়নার দিকে পাতার ভিতরে সাঁপটা দেখার পর সবাই যে চিৎকার দিলো, চিৎকার এর ফিল টাই অন্যরকম ছিলো😜 আার গিড়িপথ এর কথা কি বলবো,এতো সুন্দর গিড়িপথ আমার লাইফে কখনো দেখি নাই।৯০ডিগ্রী খাড়া পাহার এর কথা নাই বল্লাম।চা বাগান টাও দেখার মতো ছিলো।দিনশেষে সবাই মিলে পুকুরে গোসল করার মজাটাও আলাদা 😍 আার যারা যেতে চান, তাদেরকে,বলছি,খালি হাতে ট্রেকিং এ যাবেন না। হালকা পাতলা খাবার নিয়ে যাবেন'
            ]
          }
        }
      }
    },
    places: {
      $id: '/properties/places',
      type: 'array',
      items: {
        $id: '/properties/places/items',
        type: 'object',
        properties: {
          code: {
            $id: '/properties/places/items/properties/code',
            type: 'string',
            title: 'The Code Schema ',
            default: '',
            examples: ['HTO189']
          },
          title: {
            $id: '/properties/places/items/properties/title',
            type: 'string',
            title: 'The Title Schema ',
            default: '',
            examples: ['Another Place to Visit']
          },
          description: {
            $id: '/properties/places/items/properties/description',
            type: 'string',
            title: 'The Description Schema ',
            default: '',
            examples: ['']
          }
        }
      }
    }
  }
}

export { schemaData }
