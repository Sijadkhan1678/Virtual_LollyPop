import * as Yup from "yup"

export const LollySchema = Yup.object().shape({
  recipient: Yup.string()
    .min(2, "RecipientName should have 2 char")
    .max(20, "firstName max 20 char long")
    .required("Recipient name is required"),

  message: Yup.string()
    .min(2, "Message must be 4 chars")
    .max(100, "Message max 100 chars long")
    .required("Message is required"),

  sender: Yup.string().min(3,'Sender must be 3 chars').required("Sender name is required")

});

