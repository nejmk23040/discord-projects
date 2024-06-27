const axios = require('axios');
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

const tokens = [

   'توكنك', 
];
const targetChannelId = 'ايدي القروب';
const mentionId = '<@الي بتمنشن امه>';

const messages = [
   'شقمك', 
  'حرقمك',
  'بصعمك', 
  'فتحمك', 
  'بحوي كسم الي جابتك', 
  'ياولد الجرار', 
  'انيك كسمك يبن القحاب', 
  'و ادحش بكسمك زوبر عملاق', 
  'و انيك كسمك بكل زمان', 
  'و اضرب كسمك بكل مكان', 
  'و اشنق كسمك بين الابعاد', 
  'و اعسل كسمك المتناك', 
  'تزبيل كسمك المنكوح',
  'و جعل كسمك قحبه منيوك', 
  'تحليه كسمك', 
  'نيك كسمك', 
  'كسمك', 
  'كسختك', 
  'كسعمتك', 
  'كسخالاتك', 
  'كسخالك', 
  'كسم اسلافك', 
  'كسم احيائك', 
  'كسم اولادك', 
  'نيك كسم ابوك الديوث', 
  'كسخوك', 
  'اشق رحم امك', 
  'كسمك منهار', 
  'كسختك محتاج ل غيار', 
  'تعديه كسمك', 
  'تمعدن كسمك', 
  'تحجر كسختك', 
  'انقلاب كسمك الي قرد', 
  'اضرب كسمك بالسوط', 
  'انيك كسمك علطول', 
  'انيك ربمك يبن المقحبه', 
  'تقلبات كس امك المزاجيه', 
  'اغتيال كس امك من الامام و الخلف', 
  'تلاعب ب جثه امك', 
  'ادخل كسمك للجحيم', 
 'جعلمك تتناك من زنجي', 
 'ادحش بكسمك العود', 
 'اسلق كسمك',
 'اقود طيزمك', 
 'اقرط ربمك', 
 'اخسف عرضمك', 
 'اشلمك', 
 'اعوقمك', 
 'اخنقمك', 
 'اقتلمك', 
 'افعطمك', 
 'اجلطمك', 
 'اقودمك', 
 'نيكمك', 
 'صفعمك', 
 'جلطمك', 
 'خرطمك', 
 'نباحمك', 
 'استفسارمك', 
 'هروبمك', 
 'قشعمك', 
 'غدرمك', 
 'سلخمك', 
 'فسخمك', 
 'نسخمك', 
 'صرعمك', 
 'طخمك ارضا', 
 'ابادتمك', 
 'موتمك جوعا', 
 'تشرد كسمج', 
 'تبول امج تحتها', 
 'خرائمك', 
 'انقراض ربمك يبن العارية', 
 'يبن زبي', 
 'يبن الشرموطة', 
 'يبن المفعوصة', 
 'يبن المقعورة', 
 'يبن المقتولة', 
 'يبن المبعورة', 
 'اغشائمك', 
 'نطح كسمك', 
 'اختفائمك', 
 'ارباكمك', 
 'توترمك', 
 'توسلمك', 
 'تقعبرمك', 
 'تنشفمك', 
 'تخسفمك', 
 'انقصاف عرضمك', 
 'التفاف طيزمج', 
 'ارتقائمك للاعلالي', 
 'انصراعمك يبن الخاري', 
 'تقرجط ترمة امك', 
 'نكح حتشون ربك', 
 'تنشيف خرزت والدتك', 
 'تصفف كسمج', 
 'تشردمك يبن الجحبة', 
 'انصراع زكمك تحت رحمة عيري يبن الفيري', 
 'طلبمك الرحمة', 
 'استنجادمك', 
 'استفزازمك', 
 'يبن المزعجة', 
 'نيكخواتمك', 
 'انطفائمك', 
 'انقهارمك', 
 'انحراقمك', 
 'خرقمك', 
 'تعسفمك', 
 'تخسفمك', 
 'تقشرمك', 
 'تعثرمك', 
 'انفصالمك', 
 'انخصالمك', 
 'انتحار دينمك', 
 'اخضاعمك', 
 'استغلالمك', 
 'تقرطمك', 
 'فشلمك', 
 'تعبمك', 
 'خرطمك', 
 'طحنمك', 
 'دفنمك و هي حية', 
 'نيك امواتمك', 
 'انقطاع نسلمك', 
 'ضرب طيزمك بمنجل يبن تيري', 
 'ربطمك بشجرة', 
 'اقعرمك يبن القوادة', 
 'نيجمك يبن الخنيثة', 
 'كسمين امج يبن اللبوثة', 
 'نيجمك يبن المكبوثة', 
 'قربعة طيزمج', 
 'نحر نسلمج', 
 'قهر طيزمج', 
 'قطع كسمياتمج', 
 'انهيار حتشونمج', 
 'ضربمك يبن البواسر', 
 'انقراض جميع اسلاف ربك يبن المعاقين', 
 'تشرد ابوك ابن الهاربة و تركك وحيدا يبن القحبة', 
 'احتراق منزل ربك يبن الجحوبة', 
 'اختراق كسمج', 
 'افتكاك طيزمج', 
 'شق خواتمك يبن عيري', 
 'فقس عقلمك', 
 'نيك اهلمك', 
 'شوي جدمك', 
 'رفدمك', 
 'رعفمك', 
 'خلقمك', 
 'شوطمك', 
 'حنطمك', 
 'تكريسمك', 
 'تعبيسمك', 
 'تفريممك', 
 'تقليدمك', 
 'تعنيفمك', 
 'تخرفنمك', 
 'تبزيزمك', 
 'تعبمك', 
 'نيكهامك', 
 'نيكاصلمك', 
 'تعوبجمك', 
 'طخمك', 
 'طعنمك', 
 'نفخمك', 
 'صفقمك', 
 'شلقمك', 
 'بكيمك', 
 'حكمك', 
 'ركلمك', 
 'سكسمك', 
 'سفكمك', 
 'تفريشمك', 
 'يبن المكلوبة', 
 'يبن المسعورة', 
 'يبن القواويد', 
 'يبن الداعر', 
 'يبن الساعر', 
 'نيكمك العاهر', 
 'تفتيشمك', 
 'نطحختمك', 
 'تدبيزمك', 
 'تكريسمك', 
 'وفاتمك', 
 'استشهادمك', 
 'تخويطمك', 
 'تعويجمك', 
 'تنشيف نسلمك', 
 'قصاصمك', 
 'هلاك امك', 
 'شعور امك بالراحة', 
 'نيكمك يبن الكلبة', 
 'تشبيع كسمك بوكسات', 
 'تكسير راس امك', 
 'امك تتناك بينما انت تفرح وتصفق',
 'امك تبحث عن زبي',
 'عثور امك على زبي',
 'كسمك فاتن',
 'قصف كسمك بالنووي',
 'سكب الكحول في كسمك',
 'زرع فواكه في كسمك',
 'قطع أعضاء امك بالخنجر',
 'كلك الظلام ينيك كسمك مع ملكة النور',
 'افتتاح مقهى في كسمك',
 'لطم امك لحد التبلل',
 'تأليف كتاب الاصول في نيك امك',
 'خلع الستار عن زبي زبي والتصاقه في كسمك',
 'رش كسمك بالكولا',
 'كس سلالتك لحد ادم ودحش ادم في كسمك',
 'وضع ام اربعة واربعين في كسمك',
 'كسمك كبير وعميق لدرجة ان حتى امك وقاعت وضاعت فيه',
 'كسمك هاوية خاوية',
 'شق كسمك 6191346 نصف',
 'تجول المني بكسمك',
 'زبي بكس امك يا ابن المجهول',
 'خدش سوة ربك', 
 'حنط اهلك', 
 'نيكمك بزب افريقي', 
 'باكا باكا نيكمك يبن الحزاقة', 
 'نيكمك يبن المحنوكة', 
 'شعور امك بالسعادة', 
 'انصداممك', 
 'ذوبانمك', 
 'رفسمك', 
 'قلع ضرس امك', 
 'خبط امك بكف خماسي', 
 'سقلمك', 
 'حقنمك', 
 'عناقمك', 
 'لعقمك', 
 'لحسمك', 
 'فرشمك', 
 'غريمك', 
 'غرق ابوك', 
 'وفاة اخوك', 
 'نيكمك بزب رانغو الفرار', 
 'نايك كسمك و الي مشعل فيه النار', 
 'نيك ربك يبن الجرار', 
 'انيك كسختمك يبن الفار', 
 'فقس ربمك يبن قضيبي', 
 'جري جدمك', 
 'حوي عرضمك', 
 'طحن خواتمك', 
 'تكسير سنمك', 
 'انقطاع نسلمك', 
 'شعور كسمك بالحزن', 
 'انهيار شرف امك', 
 'تعليق سوة امك بالشجرة',  
 'يبن الكل', 
 'يبن العالم', 
 'خشي السواك بطبون امك', 
 'نيك حتشون يماك', 
 'الو عادي انيك امك', 
 'تم كسر ظهر امك', 
 'ادخال الموس بكسمك يبن اللبوس', 
 'تشبيع كسمك بوس', 
 'البزق بطبون امك', 
 'حرق شعر امك', 
 'تكفيتي بطبونمك', 
 'تنزيل المعجزات على راسمك', 
 'خبط كسمك بالباب يبن العطاية', 
 'نيك ربمك يبن الحلاب', 

];


function uptimeMonitor() {
    setInterval(() => {
        console.log(`Uptime: ${Math.floor(process.uptime())} seconds`);
    }, 300000);
}

function keepAlive() {
    setInterval(() => {
        console.log("Keep alive!");
    }, 300000);
}

async function sendMessage(token, channelId, message, mention) {
    try {
        await axios.post(`https://discord.com/api/v10/channels/${channelId}/typing`, {}, {
            headers: {
                Authorization: `Bot ${token}`
            }
        });

        setTimeout(async () => {
            try {
                const response = await axios.post(`https://discord.com/api/v10/channels/${channelId}/messages`, {
                    content: `${mention} ${message}`
                }, {
                    headers: {
                        Authorization: `Bot ${token}`,
                        'Content-Type': 'application/json'
                    }
                });

                if (response.status === 200) {
                    console.log(`Message sent successfully with token ${token}: ${message} to ${mention}`);
                }
            } catch (error) {
                if (error.response && error.response.status === 429) {
                    console.log(`Rate limit exceeded for token ${token}. Waiting for ${error.response.data.retry_after}ms and retrying...`);
                    await new Promise(resolve => setTimeout(resolve, error.response.data.retry_after));
                    await sendMessage(token, channelId, message, mention);
                } else if (error.response && error.response.status === 401) {
                    console.error(`Unauthorized (401) with token ${token}:`, error.response.data);
                } else if (error.response && error.response.status === 400) {
                    console.error(`Bad Request (400) with token ${token}:`, error.response.data);
                } else {
                    console.error(`Failed to send message with token ${token}:`, error.response ? error.response.data : error.message);
                }
            }
        }, 400);
    } catch (error) {
        if (error.response && error.response.status === 401) {
            console.error(`Unauthorized (401) with token ${token}:`, error.response.data);
        } else {
            console.error(`Failed to start typing with token ${token}:`, error.response ? error.response.data : error.message);
        }
    }
}

async function main() {
    const interval = 1200;
    while (true) {
        for (const message of messages) {
            await Promise.all(tokens.map(token => sendMessage(token, targetChannelId, message, mentionId)));
            await new Promise(resolve => setTimeout(resolve, interval));
        }
    }
}

app.get('/', (req, res) => {
  res.send(`
    <body>
      <center><h1>كسمك يا علاوي</h1></center>
    </body>
  `);
});

app.get('/webview', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.send(`
    <html>
      <head>
        <title>كسمك يا لحن</title>
      </head>
      <body style="margin: 0; padding: 0;">
        <iframe width="100%" height="100%" src="https://axocoder.vercel.app/" frameborder="0" allowfullscreen></iframe>
      </body>
    </html>
  `);
});

server.listen(8080, () => {
  console.log("Server is running on port 8080...");
  uptimeMonitor();
  keepAlive();
  main();
});
