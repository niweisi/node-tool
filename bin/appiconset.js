const sharp = require('sharp');
const fs = require('fs');

const args = process.argv.slice(2);

// 假设您要将图片的宽度和高度修改为200px x 200px
const inputImage = args[0]; // 输入图片路径
const outputImageDir = args[1]; // 输出图片目录路径
const contentsJson = args[2]; // Contents.json路径

function transition(inputImage, outputImage, width, height) {
    sharp(inputImage)
        .resize(width, height) // 设置新的宽度和高度
        .toFile(outputImage, (err, info) => {
            if (err) {
                console.error('An error occurred:', err, info);
                return;
            }
            console.log('Image resized successfully');
            // 可以在这里添加其他处理图片的代码
        });
}

fs.readFile(contentsJson, 'utf8', (err, data) => {
    if (err) throw err;
    const jsonData = JSON.parse(data);
    jsonData?.images.forEach((image) => {
        // width, height
        const size = image['size'].split('x'); // 尺寸
        const scale = image['scale'].split('x'); // N倍图
        const width = scale[0] * size[0];
        const height = scale[0] * size[1];
        const filename = outputImageDir + image['filename'];
        transition(inputImage, filename, width, height);
        console.log('生成文件', filename);
    });
});

// node appiconset.js "C:\xxx\test\1024LOGO.png" "C:\xxx\test\AppIcon.appiconset2\\" "C:\xxx\test\AppIcon.appiconset\Contents.json"
