import React from "react";
import {
  Page,
  Text,
  Image,
  Document,
  StyleSheet,
  View,
  Font,
} from "@react-pdf/renderer";
import LebronStretch from "../../img/certificate/header.png";

Font.register({
  family: "Oswald",
  src: "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf",
});

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: "Oswald",
  },
  author: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
    fontFamily: "Oswald",
  },
  text: {
    margin: 12,
    fontSize: 13,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  note: {
    margin: 12,
    fontSize: 9,
    left: 0,
    right: 0,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  image: {
    top: 10,
    width: 480,
    height: 80,
    left: 65,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  footer: {
    fontSize: 10,
    marginBottom: 5,
    textAlign: "center",
    color: "grey",
    bottom: -50,
  },
  pageNumber: {
    position: "absolute",
    fontSize: 15,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "black",
  },
  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row",
  },
  tableCol: {
    width: "20%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCell: {
    margin: "auto",
    marginTop: 5,
    fontSize: 10,
  },
  opening: {
    top: 45,
    left: 30,
    margin: 12,
    fontSize: 12,
    textAlign: "justify",
    fontWeight: "bold",
    fontFamily: "Times-Roman",
    paddingBottom: 35,
  },
  opening2: {
    left: 55,
    margin: 12,
    fontSize: 12,
    textAlign: "justify",
    fontWeight: "bold",
    fontFamily: "Times-Roman",
  },
  opening3: {
    left: 55,
    margin: 12,
    fontSize: 12,
    textAlign: "justify",
    fontWeight: "bold",
    fontFamily: "Times-Roman",
  },
  opening3: {
    left: 55,
    margin: 12,
    fontSize: 12,
    textAlign: "justify",
    fontWeight: "bold",
    fontFamily: "Times-Roman",
  },
  reviewed: {
    left: 400,
    margin: 12,
    fontSize: 12,
    textAlign: "justify",
    fontWeight: "bold",
    fontFamily: "Times-Roman",
    top: 20,
  },
  noted: {
    top: -30,
    left: 15,
    margin: 12,
    fontSize: 12,
    textAlign: "justify",
    fontWeight: "bold",
    fontFamily: "Times-Roman",
  },
  total: {
    left: 470,
    margin: 12,
    fontSize: 12,
    textAlign: "justify",
    fontWeight: "bold",
    fontFamily: "Times-Roman",
  },
});

const PDFFile = () => {
  return (
    <Document>
      <Page style={styles.body}>
        <Image style={styles.image} src={LebronStretch} />
        <Text style={styles.opening}>
          The Committee on Faculty Ranking and Promotion {"\n"}
          This University
        </Text>
        <Text style={styles.opening2}>
           Thru: Dr. Gertrude P. Tuazon {"\n"}
           &nbsp;&nbsp;&nbsp;       Director, Human Resource Management Office{"\n"}
           &nbsp;&nbsp;&nbsp;       This University 
        </Text>
        <Text style={styles.text}>
        Dear Sirs/Mesdames:
        </Text>
        <Text style={styles.text}>
          This is to certify that " " a " " 
          of the " ", was involved in the
          following community extension service activities within the period " "
          to " " with corresponding ratings, to which:
        </Text>

        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>SY</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Date</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Nature of Involvement</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Activity</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>CES Points</Text>
            </View>

          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>2019-2020</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>June 10, 2019</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Facilitator</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>
                HAUndog-Kalinga Tugon sa Kalamidad
              </Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}></Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}></Text>
            </View>
          </View>
        </View>
        <Text style={styles.total}>TOTAL: <Text style={styles.sum}>" "</Text> </Text>
        <Text style={styles.note}>
          Note: Has exceeded maximum rating (participant category)
        </Text>
        <Text style={styles.text}>Thank you.{"\n"}{"\n"}
          Sincerely yours,</Text>
        <Text style={styles.text}>
          ______________{"\n"}
          _______
        </Text>
        <Text style={styles.reviewed}>Reviewed by:
          ______________{"\n"}
          _______
        </Text>
        <Text style={styles.noted}>Noted by:
          ______________{"\n"}
          _______
        </Text>
        <Text style={styles.footer} fixed>
          #1 HOLY ANGEL AVENUE. STO ROSARIO, ANGELES CITY, PHILIPPINES 2009
          {"\n"}
          TEL. NOS.: (045)888-8691; 888-2902; 887-5748; 887-2455; 624-5277;
          625-9619 | FAX: (045) 888-1754: 888-2514{"\n"}
          EMAIL: HAU@HAU.EDU.PH | WWW.HAU.EDU.PH
        </Text>
      </Page>
    </Document>
  );
};

export default PDFFile;
