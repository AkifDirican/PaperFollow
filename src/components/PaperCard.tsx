import { Image, ImageSourcePropType, Text, View } from 'react-native';

export interface PaperCardProps {
  image: ImageSourcePropType;
  topic: string;
  description: string;
  contributors: string[];
}

export default function PaperCard({ image, topic, description, contributors }: PaperCardProps) {
  return (
    <View className="flex-row bg-white p-4 rounded-lg shadow-md">
      <Image source={image} className="w-24 h-24 rounded-md mr-4" resizeMode="cover" />
      <View className="flex-1">
        <Text className="text-lg font-bold text-black" numberOfLines={1}>{topic}</Text>
        <Text className="text-gray-600 mt-1" numberOfLines={2}>{description}</Text>
        <Text className="text-sm text-gray-500 mt-2" numberOfLines={1}>
          Contributors: {contributors.join(', ')}
        </Text>
      </View>
    </View>
  );
}