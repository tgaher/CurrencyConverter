import QtQuick 2.0
import QtQuick.Controls 1.1
import "curr.js" as Curr

Rectangle
{
    id: base
    width: 150
    height: 230
    color: "#7b9095"

    Text
    {
        width: 150
        id: heading
        anchors.horizontalCenter:  parent.horizontalCenter
        text: "Currency Converter"
    }


            TextEdit
        {
            x: 30
            y: 80
            id:inField
            text: "Euro"
        }

        TextEdit
        {
            x: 30
            y: 109
            id:outField
            text: "Rupee"
        }

    Text
    {
        id: result
        anchors.right:  parent.right
        anchors.bottom: parent. bottom
        text: ""
    }

    Button
    {
        anchors.verticalCenter: parent.verticalCenter
        anchors.right: parent.right
        anchors.rightMargin: 10
        width: 26
        text: "?"
        onClicked:
        {
            var rate = Curr.readapi(inField.text , outField.text);
            console.log(rate);
            outField.text = rate
            result.text = "result";

        }
    }
}

