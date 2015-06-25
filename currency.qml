import QtQuick 2.0

Rectangle {
    width: 360
    height: 360
    color: "#7b9095"

    Text {
        anchors.horizontalCenter:  parent.horizontalCenter
        text: "Currency Converter"
    }
    MouseArea {
        anchors.fill: parent
        onClicked: {
            Qt.quit();
        }
    }
}

