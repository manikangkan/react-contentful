import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: "vnellm61ncmq",
    accessToken: "mH_mdHaxvtvVWGnKWjA-p1jtQtiwwBr2dF50VguaFtw",
  });

  const getHeroSectionData = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "heroSection",
        select: "fields",
      });

      const sanitizedEntries = entries.items.map((item: any) => {
        const image = item.fields.image.fields.file.url;
        return {
          ...item.fields,
          image,
        };
      });

      return sanitizedEntries;
    } catch (error) {
      console.log(`Error fetching ${error}`);
    }
  };

  const getWhyChooseUsSectionData = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "whyChooseUsSection",
        select: "fields",
      });

      const sanitizedEntries = entries.items.map((item: any) => {
        return {
          ...item.fields,
        };
      });

      return sanitizedEntries;
    } catch (error) {
      console.log(`Error fetching ${error}`);
    }
  };

  const getWhyChooseUsSectionCardData = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "whyChooseUsSectionCard",
        select: "fields",
      });

      const sanitizedEntries = entries.items.map((item: any) => {
        return {
          ...item.fields,
        };
      });

      return sanitizedEntries;
    } catch (error) {
      console.log(`Error fetching ${error}`);
    }
  };

  const getTeamInfoSectionData = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "teamInfoSection",
        select: "fields",
      });

      const sanitizedEntries = entries.items.map((item: any) => {
        const image = item.fields.image.fields.file.url;
        return {
          ...item.fields,
          image,
        };
      });

      return sanitizedEntries;
    } catch (error) {
      console.log(`Error fetching ${error}`);
    }
  };

  const getLatestNewsSectionData = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "latestNews",
        select: "fields",
      });

      const sanitizedEntries = entries.items.map((item: any) => {
        return {
          ...item.fields,
        };
      });

      return sanitizedEntries;
    } catch (error) {
      console.log(`Error fetching ${error}`);
    }
  };

  const getLatestNewsSectionCardData = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "latestNewsCard",
        select: "fields",
      });

      const sanitizedEntries = entries.items.map((item: any) => {
        const image = item.fields.image.fields.file.url;
        return {
          ...item.fields,
          image,
        };
      });

      return sanitizedEntries;
    } catch (error) {
      console.log(`Error fetching ${error}`);
    }
  };

  const getMoreInfoSectionCardData = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "moreInfoCard",
        select: "fields",
      });

      const sanitizedEntries = entries.items.map((item: any) => {
        return {
          ...item.fields,
        };
      });

      return sanitizedEntries;
    } catch (error) {
      console.log(`Error fetching ${error}`);
    }
  };

  const getConsultationSectionData = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "consultationSection",
        select: "fields",
      });

      const sanitizedEntries = entries.items.map((item: any) => {
        return {
          ...item.fields,
        };
      });

      return sanitizedEntries;
    } catch (error) {
      console.log(`Error fetching ${error}`);
    }
  };

  return {
    getHeroSectionData,
    getWhyChooseUsSectionData,
    getWhyChooseUsSectionCardData,
    getTeamInfoSectionData,
    getLatestNewsSectionData,
    getLatestNewsSectionCardData,
    getMoreInfoSectionCardData,
    getConsultationSectionData,
  };
};

export default useContentful;
